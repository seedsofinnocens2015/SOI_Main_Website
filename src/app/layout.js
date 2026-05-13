import { Inter } from "next/font/google";
import Script from "next/script";
import { headers } from "next/headers";
import GlobalJsonLd from "./Components/GlobalJsonLd";
import { getParsedRawHeadTagsForPath } from "./Components/DynamicRawHeadTags";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './sass/style.scss';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--body-font',
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const faviconUrl = `${basePath}/favicon.ico`;

// Use ISR-style revalidation instead of force-dynamic so the rendered HTML can
// be cached for a short window. Dynamic SEO data is still fetched fresh after
// the revalidation window (see Components/DynamicRawHeadTags.jsx).
export const revalidate = 300;

export const metadata = {
  title: {
    absolute: '',
  },
  description: 'Seeds of Innocens: Best IVF Centre & Fertility Hospital in India',
  openGraph: {
    title: 'Seeds of Innocens: Best IVF Centre & Fertility Hospital in India',
    description: 'Seeds of Innocens: Best IVF Centre & Fertility Hospital in India',
    image: '/openGraphImage.jpg',
  },
  icons: {
    icon: [
      { url: faviconUrl, sizes: 'any' },
    ],
    shortcut: [faviconUrl],
    apple: [faviconUrl],
  },
};

const MAX_PRECONNECT_HINTS = 4;

/** De-dupe SEO-injected link hints (e.g. repeated i.ytimg.com preconnect) and cap preconnect count. */
function dedupeHeadLinkTags(tags) {
  if (!Array.isArray(tags)) return [];
  const seen = new Set();
  let preconnectCount = 0;
  return tags.filter((tag) => {
    if (tag.type !== 'link' || !tag.attrs) return true;
    const rel = String(tag.attrs.rel || '').toLowerCase().trim();
    const href = String(tag.attrs.href || '').trim();
    if (!href) return true;
    if (rel === 'preconnect' || rel === 'dns-prefetch') {
      const key = `${rel}:${href.toLowerCase()}`;
      if (seen.has(key)) return false;
      seen.add(key);
      if (rel === 'preconnect') {
        if (preconnectCount >= MAX_PRECONNECT_HINTS) return false;
        preconnectCount += 1;
      }
    }
    return true;
  });
}

export default async function RootLayout({ children }) {
  const headerStore = await headers();
  const headerPath =
    headerStore.get('x-current-path') ||
    headerStore.get('next-url') ||
    headerStore.get('x-invoke-path') ||
    '/';
  const currentPathname = headerPath.startsWith('http')
    ? new URL(headerPath).pathname || '/'
    : headerPath;
  const rawHeadTags = dedupeHeadLinkTags(await getParsedRawHeadTagsForPath(currentPathname));

  return (
    <html lang="en">
      <head>
        <GlobalJsonLd />
        {rawHeadTags.map((tag, index) => {
          const key = `${tag.type}-${index}`;
          if (tag.type === 'script') {
            return <script key={key} {...tag.attrs} dangerouslySetInnerHTML={{ __html: tag.content }} />;
          }
          if (tag.type === 'meta') {
            return <meta key={key} {...tag.attrs} />;
          }
          if (tag.type === 'link') {
            return <link key={key} {...tag.attrs} />;
          }
          return null;
        })}
        <meta name="author" content="Themeservices" />
        <meta
          name="google-site-verification"
          content="iAd3RUa8JayEre7QPIc6iin9VYOKrIzF1E5DMyhrzv0"
        />
        {/* Preconnect to origins that gate the LCP/critical path */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        {/* Preload the LCP hero image so it starts downloading before JS hydrates */}
        <link
          rel="preload"
          as="image"
          href={`${basePath}/assets/img/banner.webp`}
          fetchpriority="high"
        />
        <link
          rel="preload"
          href={`${basePath}/fonts/lemon-milk/LemonMilkMedium.woff`}
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        {/* Lemon Milk is self-hosted in /fonts/lemon-milk (see sass/default/_typography.scss). */}
        {/* All marketing/analytics tags are loaded after a small delay or on the
            first meaningful user interaction to avoid hurting LCP/TBT. */}
        <Script id="soi-marketing-loader" strategy="afterInteractive">
          {`(function () {
  var started = false;
  function loadScript(src, id) {
    if (id && document.getElementById(id)) return;
    var s = document.createElement('script');
    s.async = true;
    s.src = src;
    if (id) s.id = id;
    document.head.appendChild(s);
  }

  function start() {
    if (started) return;
    started = true;

    // Google Ads / gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'AW-719316761');
    loadScript('https://www.googletagmanager.com/gtag/js?id=AW-719316761', 'soi-gtag');

    // Google Tag Manager
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-K68L3V8');

    // Meta Pixel
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1526747694884464');
    fbq('init', '2130475664040983');
    fbq('track', 'PageView');
  }

  // Start after 10s or on first user interaction, whichever comes first
  var timer = setTimeout(start, 10000);
  ['click','scroll','keydown','pointerdown'].forEach(function (evt) {
    window.addEventListener(evt, function () {
      clearTimeout(timer);
      start();
    }, { once: true, passive: true });
  });
})();`}
        </Script>
        <Script id="phone-input-limit" strategy="lazyOnload">
          {`(function () {
  var phoneFields = ['phone', 'mobile', 'contact', 'contactno', 'contact_no', 'contactnumber'];
  var phoneErrorMessage = 'Phone number must be exactly 10 digits.';

  function isPhoneInput(target) {
    if (!(target instanceof HTMLInputElement)) return false;
    var name = (target.getAttribute('name') || '').toLowerCase();
    return phoneFields.indexOf(name) !== -1 || target.type === 'tel';
  }

  function getOrCreateErrorEl(input) {
    var next = input.nextElementSibling;
    if (next && next.getAttribute('data-phone-error') === 'true') return next;

    var errorEl = document.createElement('div');
    errorEl.setAttribute('data-phone-error', 'true');
    errorEl.style.color = '#c33';
    errorEl.style.fontSize = '12px';
    errorEl.style.marginTop = '6px';
    errorEl.style.display = 'none';
    errorEl.textContent = phoneErrorMessage;
    input.insertAdjacentElement('afterend', errorEl);
    return errorEl;
  }

  function syncPhoneError(input) {
    var errorEl = getOrCreateErrorEl(input);
    var digits = input.value.replace(/\\D/g, '');
    var shouldShow = digits.length > 0 && digits.length !== 10;
    errorEl.style.display = shouldShow ? 'block' : 'none';
    return shouldShow;
  }

  document.addEventListener('input', function (event) {
    var target = event.target;
    if (!isPhoneInput(target)) return;

    target.maxLength = 10;
    target.inputMode = 'numeric';
    target.setAttribute('pattern', '[0-9]{10}');

    var digits = target.value.replace(/\\D/g, '').slice(0, 10);
    if (target.value !== digits) {
      target.value = digits;
    }

    syncPhoneError(target);
  });

  document.addEventListener('blur', function (event) {
    var target = event.target;
    if (!isPhoneInput(target)) return;
    syncPhoneError(target);
  }, true);

  document.addEventListener('submit', function (event) {
    var form = event.target;
    if (!(form instanceof HTMLFormElement)) return;

    var phoneInputs = form.querySelectorAll('input[type="tel"], input[name="phone"], input[name="mobile"], input[name="contact"], input[name="contactNo"], input[name="contact_no"], input[name="contactNumber"]');
    var firstInvalid = null;

    for (var i = 0; i < phoneInputs.length; i += 1) {
      var input = phoneInputs[i];
      if (!(input instanceof HTMLInputElement)) continue;
      var hasError = syncPhoneError(input);
      if (hasError && !firstInvalid) {
        firstInvalid = input;
      }
    }

    if (firstInvalid) {
      event.preventDefault();
      firstInvalid.focus();
    }
  });
})();`}
        </Script>
      </head>
      <body className={`${inter.variable}`}>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1526747694884464&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2130475664040983&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K68L3V8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
