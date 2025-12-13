import { Lato, Work_Sans } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './sass/style.scss';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--body-font',
});
const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--heading-font',
});

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Themeservices" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Disable Next.js automatic prefetching for static export */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window === 'undefined') return;
                
                // Disable Next.js automatic prefetching
                if (window.next && window.next.router) {
                  const originalPrefetch = window.next.router.prefetch;
                  window.next.router.prefetch = function() { 
                    return Promise.resolve(); 
                  };
                }
                
                // Block all .txt file requests
                const blockTxtRequests = function(url) {
                  if (typeof url === 'string' && (url.includes('.txt?_rsc=') || url.endsWith('.txt'))) {
                    return true;
                  }
                  return false;
                };
                
                // Override fetch to prevent .txt file requests
                const originalFetch = window.fetch;
                window.fetch = function(...args) {
                  const url = args[0];
                  if (blockTxtRequests(url)) {
                    return Promise.reject(new Error('Prefetch disabled'));
                  }
                  return originalFetch.apply(this, args);
                };
                
                // Override XMLHttpRequest to prevent .txt file requests
                const originalXHROpen = XMLHttpRequest.prototype.open;
                XMLHttpRequest.prototype.open = function(method, url, ...rest) {
                  if (blockTxtRequests(url)) {
                    return;
                  }
                  return originalXHROpen.call(this, method, url, ...rest);
                };
                
                // Override send to block .txt requests
                const originalXHRSend = XMLHttpRequest.prototype.send;
                XMLHttpRequest.prototype.send = function(...args) {
                  if (this._url && blockTxtRequests(this._url)) {
                    return;
                  }
                  return originalXHRSend.apply(this, args);
                };
                
                // Intercept link prefetching
                document.addEventListener('DOMContentLoaded', function() {
                  const links = document.querySelectorAll('link[rel="prefetch"]');
                  links.forEach(function(link) {
                    if (link.href && blockTxtRequests(link.href)) {
                      link.remove();
                    }
                  });
                });
              })();
            `,
          }}
        />
      </head>
      <body className={`${lato.variable} ${workSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
