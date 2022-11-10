import Head from 'next/head';
import Image from 'next/image';

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
        <div>
          <div></div>

          <div>
            <Image
              src='https://res.cloudinary.com/terieyenike/image/upload/v1645512158/pexels-christina-morillo-1181681_itscxa.jpg'
              width={500}
              height={500}
              alt='working at a hotdesk'
            />
          </div>
        </div>
      </main>
    </div>
  );
}
