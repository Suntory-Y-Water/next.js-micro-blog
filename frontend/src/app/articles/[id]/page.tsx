import React from 'react';
import { config } from '@/lib/config';
import { headers } from 'next/headers';
import { Article } from '@/app/types';
import ArticleContent from '@/app/components/ArticleContent';

const ArticlePage = async ({ params }: { params: { id: string } }) => {
  const host = headers().get('host');
  const apiUrl = `${config.API_PREFIX! + host}/api/blog/${params.id}`;
  const res = await fetch(apiUrl);
  const detailArticle: Article = await res.json();

  return <ArticleContent params={detailArticle} apiUrl={apiUrl} />;
};

export default ArticlePage;
