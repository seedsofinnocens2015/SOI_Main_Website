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
              if (typeof window !== 'undefined') {
                // Disable Next.js automatic prefetching
                if (window.next && window.next.router) {
                  window.next.router.prefetch = function() { return Promise.resolve(); };
                }
                // Override fetch to prevent .txt file requests and fix double /new/new/ prefix
                const originalFetch = window.fetch;
                window.fetch = function(...args) {
                  const url = args[0];
                  if (typeof url === 'string') {
                    // Block .txt file requests
                    if (url.includes('.txt?_rsc=')) {
                      return Promise.reject(new Error('Prefetch disabled'));
                    }
                    // Fix double /new/new/ prefix
                    if (url.includes('/new/new/')) {
                      args[0] = url.replace('/new/new/', '/new/');
                    }
                  }
                  return originalFetch.apply(this, args);
                };
                // Override XMLHttpRequest to prevent .txt file requests
                const originalXHROpen = XMLHttpRequest.prototype.open;
                XMLHttpRequest.prototype.open = function(method, url, ...rest) {
                  if (typeof url === 'string' && url.includes('.txt?_rsc=')) {
                    return;
                  }
                  // Fix double /new/new/ prefix
                  if (typeof url === 'string' && url.includes('/new/new/')) {
                    url = url.replace('/new/new/', '/new/');
                  }
                  return originalXHROpen.call(this, method, url, ...rest);
                };
              }
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
