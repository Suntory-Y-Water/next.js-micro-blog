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

  if (response.status === 404) {
    notFound();
  }

  if (!response.ok) {
    throw new Error('エラーが発生しました');
  }

  const article = await response.json();
  return article;
};

// 投稿用のAPI
export const createArticle = async (
  id: string,
  title: string,
  content: string,
): Promise<Article> => {
  const currentDatetime = new Date().toISOString();

  const response = await fetch(`http://localhost:3001/posts/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, title, content, currentDatetime }),
  });

  if (!response.ok) {
    throw new Error('エラーが発生しました');
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const newArticle = await response.json();
  return newArticle;
};

// 削除用のAPI
export const deleteArticle = async (id: string): Promise<Article> => {
  const response = await fetch(`http://localhost:3001/posts/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('エラーが発生しました');
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const deleteArticle = await response.json();
  return deleteArticle;
};
