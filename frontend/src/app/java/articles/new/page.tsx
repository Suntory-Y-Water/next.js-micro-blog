'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { config } from '@/lib/config';

const CreateBlogPage = () => {
  const router = useRouter();
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    // リクエストボディにuuidをセット
    const id = uuidv4();

    await fetch(`${config.FRONTEND_JAVA_API_URL}/api/java/blog`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        title,
        content,
        createdAt: new Date().toISOString(),
      }),
    });
    setLoading(false);
    // リダイレクト機能
    router.push('/java');
    router.refresh();
  };
  return (
    <div className='min-h-screen py-8 px-4 md:px-12'>
      <h2 className='text-2xl font-bold mb-4'>ブログ新規作成</h2>
      <form className='bg-slate-200 p-6 rounded font-bold' onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='text-gray-700 text-sm font-bold mb-2'>タイトル</label>
          <input
            type='text'
            className='shadow border-t rounded-md w-full py-2 px-3 text-gray-700 leading-4 focus:outline-none'
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label className='text-gray-700 text-sm font-bold mb-2'>本文</label>
          <textarea
            className='shadow border-t rounded-md w-full py-2 px-3 text-gray-700 leading-4 focus:outline-none'
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button
          type='submit'
          className={`py-3 px-3 font-medium rounded-md ${
            loading || !title || !content
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-green-600 hover:bg-green-500'
          }`}
          disabled={loading || !title || !content}
        >
          投稿する
        </button>
      </form>
    </div>
  );
};

export default CreateBlogPage;
