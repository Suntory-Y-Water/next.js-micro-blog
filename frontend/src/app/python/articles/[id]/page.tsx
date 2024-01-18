import React from 'react';
import { config } from '@/lib/config';
import ArticleContent from '@/app/components/ArticleContent';

const ArticlePage = async ({ params }: { params: { id: string } }) => {
  const apiUrl = `${config.PYTHON_API_URL}/python/blog/${params.id}`;
  const res = await fetch(apiUrl);
  const detailArticle = await res.json();
  return (
    <ArticleContent
      params={detailArticle}
      apiUrl={`${config.FRONTEND_PYTHON_API_URL}/python/blog/${params.id}`}
    />
  );
};

export default ArticlePage;
