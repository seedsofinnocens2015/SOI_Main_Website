import { Inter } from "next/font/google";
import Script from "next/script";
import GlobalJsonLd from "./Components/GlobalJsonLd";
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

export const metadata = {
  title: {
    absolute: '',
    default: 'Seeds of Innocens: Best IVF Centre & Fertility Hospital in India',
    template: '%s | Seeds of Innocens: Best IVF Centre & Fertility Hospital in India',
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
        <GlobalJsonLd />
        <meta name="author" content="Themeservices" />
        <meta
          name="google-site-verification"
          content="iAd3RUa8JayEre7QPIc6iin9VYOKrIzF1E5DMyhrzv0"
        />
        <link rel="preconnect" href="https://fonts.cdnfonts.com" />
        <link rel="dns-prefetch" href="https://fonts.cdnfonts.com" />
        {/* Lemon Milk Font - Load from CDN or local file */}
        <link
          rel="stylesheet"
          href="https://fonts.cdnfonts.com/css/lemon-milk"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-719316761"
          strategy="lazyOnload"
        />
        <Script id="google-ads-gtag" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-719316761');`}
        </Script>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K68L3V8');`}
        </Script>
        <Script id="meta-pixel" strategy="lazyOnload">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1526747694884464');
fbq('init', '2130475664040983');
fbq('track', 'PageView');`}
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
