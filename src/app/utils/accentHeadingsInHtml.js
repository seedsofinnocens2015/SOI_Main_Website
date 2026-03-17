/**
 * Process HTML string and wrap h2/h3 heading text so first half is #df3655, second half black.
 * Replaces inner text of h2/h3 with: <span class="cs_heading_accent_start">first half words</span> <span>rest</span>
 */
function escapeHtml(s) {
  if (!s) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function accentHeadingsInHtml(html) {
  if (!html || typeof html !== 'string') return html;

  return html.replace(/<(h[23])([^>]*)>([\s\S]*?)<\/\1>/gi, (match, tag, attrs, inner) => {
    const text = inner.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
    if (!text) return match;

    const words = text.split(/\s+/).filter(Boolean);
    const mid = Math.ceil(words.length / 2);
    const firstPart = words.slice(0, mid).join(' ');
    const restPart = words.slice(mid).join(' ');

    const newInner = restPart
      ? `<span class="cs_heading_accent_start">${escapeHtml(firstPart)}</span> <span>${escapeHtml(restPart)}</span>`
      : `<span class="cs_heading_accent_start">${escapeHtml(firstPart)}</span>`;

    const existingClass = (attrs.match(/class=["']([^"']*)["']/i) || [])[1] || '';
    const accentClass = 'cs_ivf_content_heading cs_blog_body_heading';
    const combinedClass = existingClass ? `${existingClass} ${accentClass}` : accentClass;
    const newAttrs = existingClass
      ? attrs.replace(/class=["'][^"']*["']/i, `class="${combinedClass}"`)
      : (attrs.trim() ? `${attrs} ` : '') + `class="${accentClass}"`;

    return `<${tag} ${newAttrs}>${newInner}</${tag}>`;
  });
}
