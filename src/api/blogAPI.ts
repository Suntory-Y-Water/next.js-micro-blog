import { Article } from '@/app/types/types';
import { notFound } from 'next/navigation';

export const getAllArticles = async (): Promise<Article[]> => {
  // 動的データのためSSRで取得する
  // サーバー側でAPIを叩いて、クライアント側で非同期処理の関数を呼ぶ
  const response = await fetch('http://localhost:3001/posts', { cache: 'no-store' });

  if (!response.ok) {
    throw new Error('エラーが発生しました');
  }
  const articles = await response.json();
  return articles;
};

export const getDatailArticle = async (id: string): Promise<Article> => {
  // ISRで取得する
  const response = await fetch(`http://localhost:3001/posts/${id}`, { next: { revalidate: 60 } });

  if (!response.ok) {
    throw new Error('エラーが発生しました');
  }

  if (response.status === 404) {
    notFound();
  }

  const article = await response.json();
  return article;
};
