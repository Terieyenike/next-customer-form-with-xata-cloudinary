import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Customer Feedback Form</title>
        <meta
          name='description'
          content='Get customer feedback and act on it from the backend'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='min-h-screen flex flex-col'>
        <h1 className='font-bold underline'>career transition</h1>
      </main>
    </div>
  );
}
