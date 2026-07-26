import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>قلم — پیشہ ورانہ اردو ایڈیٹر</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
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
