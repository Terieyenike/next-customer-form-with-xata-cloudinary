import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log('message sent successfully');
  };
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
        <div className='flex'>
          <div className='p-8 w-4/5'>
            <div>
              <h1 className='font-bold text-2xl mb-2'>
                Let&apos;s work together
              </h1>
              <p>
                We&apos;d love to hear from you! Send us a message and we will
                get back to you.
              </p>
            </div>

            <form onSubmit={handleSubmitForm}>
              <div className='flex items-center w-full justify-between'>
                <div className='mb-5 mt-6'>
                  <label htmlFor='fname' className='block mb-2'>
                    First name
                  </label>

                  <input
                    type='text'
                    name='fname'
                    value=''
                    id='fname'
                    className='w-full border-2 p-1'
                  />
                </div>
                <div>
                  <label htmlFor='lname' className='block mb-2'>
                    Last name
                  </label>

                  <input
                    type='text'
                    name='lname'
                    value=''
                    id='lname'
                    className='w-full border-2 p-1'
                  />
                </div>
              </div>

              <div className='mb-5'>
                <label htmlFor='email' className='block mb-2'>
                  Email
                </label>

                <input
                  type='email'
                  name='email'
                  id='email'
                  value=''
                  className='w-full border-2 p-1'
                />
              </div>

              <div className='mb-5'>
                <label htmlFor='company' className='block mb-2'>
                  Company
                </label>

                <input
                  type='text'
                  value=''
                  name='company'
                  id='company'
                  className='w-full border-2 p-1'
                />
              </div>

              <div className='mb-5'>
                <div className='flex justify-between items-center mb-2'>
                  <label htmlFor='phone'>Phone</label>

                  <span>Optional</span>
                </div>

                <input
                  type='number'
                  name='number'
                  id='number'
                  value=''
                  className='w-full border-2 p-1'
                />
              </div>

              <div className='mb-5'>
                <div className='flex justify-between items-center mb-2'>
                  <label htmlFor='message'>How can we help you?</label>

                  <span>Max. 500 characters</span>
                </div>

                <textarea
                  name='message'
                  id='message'
                  rows='10'
                  className='w-full border-2 p-1'
                />
              </div>

              <div>
                <div className='mb-2'>
                  <label htmlFor='budget'>Expected budget</label>
                </div>

                <label htmlFor='cost' className='block'>
                  <input
                    type='checkbox'
                    name='cost'
                    id='cost'
                    value='less than $25k'
                    className='mr-2'
                  />
                  Less than $25k
                </label>

                <label htmlFor='cost' className='block'>
                  <input
                    type='checkbox'
                    name='cost'
                    id='cost'
                    value='$25k - $50k'
                    className='mr-2'
                  />
                  $25k - $50k
                </label>

                <label htmlFor='cost' className='block'>
                  <input
                    type='checkbox'
                    name='cost'
                    id='cost'
                    value='$50k - $100k'
                    className='mr-2'
                  />
                  $50k - $100k
                </label>

                <label htmlFor='cost'>
                  <input
                    type='checkbox'
                    name='cost'
                    id='cost'
                    value='$100k+'
                    className='mr-2'
                  />
                  $100k+
                </label>
              </div>
              <button
                type='submit'
                className='float-right bg-violet-800 py-2 px-6 text-gray-50 mt-5 rounded-md'>
                Submit
              </button>
            </form>
          </div>

          <div>
            <Image
              src='https://res.cloudinary.com/terieyenike/image/upload/v1645512158/pexels-christina-morillo-1181681_itscxa.jpg'
              width={500}
              height={500}
              alt='working at a hotdesk'
              className='w-screen h-full object-cover'
            />
          </div>
        </div>
      </main>
    </div>
  );
}
