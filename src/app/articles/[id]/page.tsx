import { getDatailArticle } from '@/api/blogAPI';
import Image from 'next/image';
import React from 'react';

const Alticle = async ({ params }: { params: { id: string } }) => {
  const detailArticle = await getDatailArticle(params.id);

  return (
    <div className='max-w-3xl mx-auto p-5'>
      <Image
        src={`https://source.unsplash.com/collection/1346951/1000x500?sig${detailArticle.id}}`}
        alt='Article Image'
        width={1280}
        height={300}
      />
      <h1 className='text-4xl my-10'>{detailArticle.title}</h1>
      <div className='text-lg leading-relaxed text-justify'>
        <p>{detailArticle.content}</p>
      </div>
    </div>
  );
};

export default Alticle;
