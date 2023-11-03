import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ArticleList = () => {
  return (
    <div>
      <article className='flex flex-col my-4'>
        <Link href='#'>
          <Image
            src='https://source.unsplash.com/collection/1346951/1000x500?sig=2'
            alt='Article Image'
            width={1280}
            height={300}
          />
        </Link>
        <div className='bg-white flex flex-col p-6'>
          <Link href='#' className='text-blue-700 pb-4 font-bold'>
            Technology
          </Link>
          <Link href='#' className='text-slate-700 text-3xl font-bold hover:text-slate-950'>
            Next.js 10.2 Released with New Features and Performance Improvements
          </Link>
          <Link href='#' className='text-slate-700 pb-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo similique molestiae,
            accusantium eos corrupti eligendi commodi quasi neque a dolores porro nostrum? Maxime
            voluptatum est nihil sequi veniam, quod quidem?
          </Link>
          <Link href='#' className='text-pink-600 hover:text-slate-950'>
            続きを読む
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleList;
