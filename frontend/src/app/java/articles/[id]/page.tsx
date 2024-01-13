import React from 'react';
import { config } from '@/lib/config';
import ArticleContent from '@/app/components/ArticleContent';

const ArticlePage = async ({ params }: { params: { id: string } }) => {
  const apiUrl = `${config.JAVA_API_URL}/api/java/blog/${params.id}`;
  const res = await fetch(apiUrl);
  const detailArticle = await res.json();

  return <ArticleContent params={detailArticle} apiUrl={apiUrl} />;
};

export default ArticlePage;
