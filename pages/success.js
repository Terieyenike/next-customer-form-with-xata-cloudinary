import Link from 'next/link';
const Success = () => {
  return (
    <section className='bg-gray-900'>
      <div className=' mx-auto max-w-6xl w-4/5'>
        <div className='flex items-center justify-center min-h-screen flex-col'>
          <p className='text-white text-2xl lg:text-4xl capitalize text-center mb-10'>
            message sent successfully. We would get back to you
          </p>

          <Link
            href='/'
            className='text-white bg-green-800 font-bold py-1 px-3'>
            Return home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Success;
