import { Inter } from "next/font/google";
import Script from "next/script";
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

// Hostinger ISR cache: SEO edits become visible automatically in about 2 minutes.
export const revalidate = 120;

export const metadata = {
  metadataBase: new URL('https://www.seedsofinnocens.com'),
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Themeservices" />
        <meta
          name="google-site-verification"
          content="iAd3RUa8JayEre7QPIc6iin9VYOKrIzF1E5DMyhrzv0"
        />
        {/* Preconnect to origins that gate the LCP/critical path */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link
          rel="preload"
          href={`${basePath}/fonts/lemon-milk/LemonMilkMedium.woff`}
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="image"
          href={`${basePath}/assets/img/banner.webp`}
          media="(min-width: 768px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href={`${basePath}/assets/img/banner-mobile.webp`}
          media="(max-width: 767px)"
          fetchPriority="high"
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

  // Start after 10s or shortly after the first user interaction. Scheduling
  // third-party work in an idle period keeps the interaction itself responsive.
  var timer = setTimeout(start, 10000);
  function scheduleStart() {
    clearTimeout(timer);
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(start, { timeout: 2000 });
    } else {
      setTimeout(start, 250);
    }
  }
  ['click','scroll','keydown','pointerdown'].forEach(function (evt) {
    window.addEventListener(evt, scheduleStart, { once: true, passive: true });
  });
})();`}
        </Script>
        <Script id="phone-input-limit" strategy="lazyOnload">
          {`(function () {
  var phoneFields = ['phone', 'mobile', 'contact', 'contactno', 'contact_no', 'contactnumber'];
  var phoneLengthErrorMessage = 'Phone number must be exactly 10 digits.';
  var phoneStartErrorMessage = 'Invalid number';

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
    input.insertAdjacentElement('afterend', errorEl);
    return errorEl;
  }

  function syncPhoneError(input) {
    var errorEl = getOrCreateErrorEl(input);
    var digits = input.value.replace(/\\D/g, '');
    var errorMessage = '';
    if (digits.length > 0 && !/^[6-9]/.test(digits)) {
      errorMessage = phoneStartErrorMessage;
    } else if (digits.length > 0 && digits.length !== 10) {
      errorMessage = phoneLengthErrorMessage;
    }
    errorEl.textContent = errorMessage;
    var shouldShow = errorMessage !== '';
    errorEl.style.display = shouldShow ? 'block' : 'none';
    return shouldShow;
  }

  document.addEventListener('input', function (event) {
    var target = event.target;
    if (!isPhoneInput(target)) return;

    target.maxLength = 10;
    target.inputMode = 'numeric';
    target.setAttribute('pattern', '[6-9][0-9]{9}');

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
        <Script id="microsoft-clarity" strategy="lazyOnload">
  {`
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "xbictqalyk");
  `}
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
