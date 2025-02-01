
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Define desired font weights
});

function MyApp({ Component, pageProps }: { Component: React.ComponentType; pageProps: any }) {
  return (
    <main className={openSans.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
