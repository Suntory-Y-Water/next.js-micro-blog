import DeleteButton from '@/app/components/DeleteButton';
import Image from 'next/image';
import React from 'react';
import { Article } from '@/app/types';

const ArticleContent = ({ params, apiUrl }: { params: Article; apiUrl: string }) => {
  return (
    <div className='max-w-3xl mx-auto p-5'>
      <Image
        src={`https://source.unsplash.com/collection/1346951/1000x500?sig${params.id}}`}
        alt='Article Image'
        width={1280}
        height={300}
      />
      <h1 className='text-4xl my-10'>{params.title}</h1>
      <div className='text-lg leading-relaxed text-justify'>
        <p>{params.content}</p>
      </div>
      <div className='text-right mt-3'>
        <DeleteButton apiUrl={apiUrl} />
      </div>
    </div>
  );
};

export default ArticleContent;
