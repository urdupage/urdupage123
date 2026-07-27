import { useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then(() => console.log('Service Worker registered'))
          .catch((err) => console.error('Service Worker registration failed:', err));
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>قلم — پیشہ ورانہ اردو ایڈیٹر</title>

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1"
        />

        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0d6efd" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </Head>

      <iframe
        src="/editor.html"
        style={{
          border: 'none',
          width: '100vw',
          height: '100vh',
          display: 'block',
        }}
        title="Qalam Urdu Editor"
      />
    </>
  );
}