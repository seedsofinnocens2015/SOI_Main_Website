import { fetchResolvedSeo } from '@/app/utils/seoMetadata';

function parseAttributes(attributeString = '') {
  const attrs = {};
  const attrRegex = /([^\s=/>]+)(?:\s*=\s*("([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
  const reactNames = {
    charset: 'charSet',
    'http-equiv': 'httpEquiv',
    crossorigin: 'crossOrigin',
    referrerpolicy: 'referrerPolicy',
  };
  let match;

  while ((match = attrRegex.exec(attributeString))) {
    const rawName = match[1].toLowerCase();
    attrs[reactNames[rawName] || rawName] = match[3] ?? match[4] ?? match[5] ?? '';
  }

  return attrs;
}

function parseRawHeadTags(rawHeadTags = '') {
  const tags = [];
  const tagRegex = /<script\b([^>]*)>([\s\S]*?)<\/script>|<meta\b([^>]*)\/?>|<link\b([^>]*)\/?>/gi;
  let match;

  while ((match = tagRegex.exec(String(rawHeadTags || '')))) {
    if (match[1] != null) {
      tags.push({ type: 'script', attrs: parseAttributes(match[1]), content: match[2] || '' });
    } else if (match[3] != null) {
      tags.push({ type: 'meta', attrs: parseAttributes(match[3]) });
    } else if (match[4] != null) {
      tags.push({ type: 'link', attrs: parseAttributes(match[4]) });
    }
  }

  return tags;
}

function buildItemSchema(seo = {}) {
  const fields = ['itemType', 'itemName', 'itemDescription', 'itemUrl', 'itemImage', 'itemAuthor', 'itemOrganization'];
  if (!fields.some((key) => String(seo[key] || '').trim())) return null;

  return {
    '@context': 'https://schema.org',
    '@type': String(seo.itemType || '').replace(/^https?:\/\/schema\.org\//i, '') || 'WebPage',
    ...(seo.itemName ? { name: seo.itemName } : {}),
    ...(seo.itemDescription ? { description: seo.itemDescription } : {}),
    ...(seo.itemUrl ? { url: seo.itemUrl } : {}),
    ...(seo.itemImage ? { image: seo.itemImage } : {}),
    ...(seo.itemAuthor ? { author: { '@type': 'Person', name: seo.itemAuthor } } : {}),
    ...(seo.itemOrganization ? { publisher: { '@type': 'Organization', name: seo.itemOrganization } } : {}),
  };
}

export default async function SeoRawHead({ pageUrl }) {
  const seo = await fetchResolvedSeo(pageUrl);
  if (!seo) return null;

  const rawTags = parseRawHeadTags(seo.rawHeadTags);
  const itemSchema = buildItemSchema(seo);

  return (
    <>
      {seo.fbAdmins ? <meta property="fb:admins" content={seo.fbAdmins} /> : null}
      {seo.twitterCanonical ? <meta name="twitter:url" content={seo.twitterCanonical} /> : null}
      {itemSchema ? (
        <script
          id="soi-item-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemSchema).replace(/</g, '\\u003c') }}
        />
      ) : null}
      {rawTags.map((tag, index) => {
        const key = `${tag.type}-${index}`;
        if (tag.type === 'script') {
          return <script key={key} {...tag.attrs} dangerouslySetInnerHTML={{ __html: tag.content }} />;
        }
        if (tag.type === 'meta') return <meta key={key} {...tag.attrs} />;
        if (tag.type === 'link') return <link key={key} {...tag.attrs} />;
        return null;
      })}
    </>
  );
}
