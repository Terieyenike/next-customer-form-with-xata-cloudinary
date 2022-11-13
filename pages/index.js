import { use, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

const defaultFormFields = {
  first_name: '',
  last_name: '',
  email: '',
  company: '',

  message: '',

  hear_about_us: '',
};

export default function Home() {
  const router = useRouter();
  const [formFields, setFormFields] = useState(defaultFormFields);

  const {
    first_name,
    last_name,
    email,
    company,

    message,

    hear_about_us,
  } = formFields;

  const submit = () => {
    fetch('/api/add-detail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        company,

        message,

        hear_about_us,
      }),
    }).then(() => router.push('/success'));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    submit();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
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
        <div className='flex flex-col lg:flex lg:flex-row'>
          <div className='mx-auto max-w-6xl w-4/5 lg:p-8'>
            <div className='mt-8 lg:mt-0'>
              <h1 className='font-bold text-2xl mb-2'>
                Let&apos;s work together
              </h1>
              <p>
                We&apos;d love to hear from you! Send us a message and we will
                get back to you.
              </p>
            </div>

            <form onSubmit={handleSubmitForm}>
              <div className='mb-5 mt-6'>
                <label htmlFor='first_name' className='block mb-2'>
                  First name
                </label>

                <input
                  type='text'
                  name='first_name'
                  value={first_name}
                  id='first_name'
                  className='w-full border-2 p-1'
                  onChange={handleChange}
                />
              </div>

              <div className='mb-5 mt-6'>
                <label htmlFor='last_name' className='block mb-2'>
                  Last name
                </label>

                <input
                  type='text'
                  name='last_name'
                  id='last_name'
                  value={last_name}
                  className='w-full border-2 p-1'
                  onChange={handleChange}
                />
              </div>

              <div className='mb-5'>
                <label htmlFor='email' className='block mb-2'>
                  Email
                </label>

                <input
                  type='email'
                  name='email'
                  id='email'
                  value={email}
                  className='w-full border-2 p-1'
                  onChange={handleChange}
                />
              </div>

              <div className='mb-5'>
                <label htmlFor='company' className='block mb-2'>
                  Company
                </label>

                <input
                  type='text'
                  value={company}
                  name='company'
                  id='company'
                  className='w-full border-2 p-1'
                  onChange={handleChange}
                />
              </div>

              <div className='mb-5'>
                <div className='mb-2'>
                  <label htmlFor='message'>How can we help you?</label>
                </div>

                <textarea
                  name='message'
                  id='message'
                  rows='10'
                  value={message}
                  className='w-full border-2 p-1'
                  onChange={handleChange}
                />
              </div>

              <div className='mb-5 mt-5'>
                <label htmlFor='hear_about_us' className='mb-2'>
                  How did you hear about us?
                </label>

                <input
                  type='text'
                  id='hear_about_us'
                  name='hear_about_us'
                  value={hear_about_us}
                  onChange={handleChange}
                  className='w-full border-2 p-1'
                />
              </div>
              <button
                type='submit'
                className='float-right bg-violet-800 py-2 px-6 text-gray-50 mt-5 rounded-md'>
                Submit
              </button>
            </form>
          </div>

          <div className='mt-8 lg:mt-0'>
            <Image
              src='https://res.cloudinary.com/terieyenike/image/upload/v1645512158/pexels-christina-morillo-1181681_itscxa.jpg'
              width={500}
              height={500}
              priority
              alt='working at a hotdesk'
              className='w-screen h-full object-cover'
            />
          </div>
        </div>
      </main>
    </div>
  );
}
