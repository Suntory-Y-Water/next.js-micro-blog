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
      <nav className='text-sm font-medium'>
        <Link
          href={'/articles/new'}
          className='py-3 px-3 rounded-md bg-green-600 hover:bg-green-500'
        >
          記事を書く
        </Link>
      </nav>
    </header>
  );
};

export default Header;
