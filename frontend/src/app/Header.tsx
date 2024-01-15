import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className='py-5 px-10 border-b flex justify-between items-center'>
      <div>
        <h1 className='text-2xl font-sans'>
          <Link href={'/'}>Next.js 13 Blog</Link>
        </h1>
      </div>
      <nav className='text-sm font-medium flex'>
        <Link href={'/python'} className='py-3 px-8 mx-4 rounded-md bg-blue-600 hover:bg-blue-500'>
          Python(FastAPI)
        </Link>
        <Link
          href={'/javascript'}
          className='py-3 px-8 mx-4 rounded-md bg-yellow-600 hover:bg-yellow-500'
        >
          JavaScript(Express)
        </Link>
        <Link href={'/java'} className='py-3 px-8 mx-4 rounded-md bg-red-600 hover:bg-red-500'>
          Java(SpringBoot)
        </Link>
      </nav>
    </header>
  );
};

export default Header;
