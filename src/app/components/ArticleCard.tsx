import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Article } from '../types/types';

type ArticleCardProps = {
  article: Article;
};

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <article className='shadow flex flex-col my-4' key={article.id}>
      <Link href={`articles/${article.id}`} className='hover:opacity-75'>
        <Image
          src={`https://source.unsplash.com/collection/1346951/1000x500?sig${article.id}}`}
          alt='Article Image'
          width={1280}
          height={300}
          priority
        />
      </Link>
      <div className='bg-white flex flex-col p-6'>
        <Link
          href={`articles/${article.id}`}
          className='text-slate-700 text-3xl font-bold hover:text-slate-950'
        >
          {article.title}
        </Link>
        <p className='text-sm pb-3 text-slate-700'>
          Publish on {article.created_at && new Date(article.created_at).toLocaleDateString()}
        </p>
        <Link href={`articles/${article.id}`} className='text-slate-700 pb-6'>
          {article.content.length > 70 ? article.content.substring(0, 70) + '...' : article.content}
        </Link>
        <Link href={`articles/${article.id}`} className='text-pink-600 hover:text-slate-950'>
          続きを読む
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;
