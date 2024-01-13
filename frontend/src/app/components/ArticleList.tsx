import React from 'react';
import ArticleCard from './ArticleCard';
import { Article } from '../types';

type ArticleListProps = {
  articles: Article[];
  baseUrl: string;
};

const ArticleList = ({ articles, baseUrl }: ArticleListProps) => {
  return (
    <div>
      {articles.map((article) => (
        <ArticleCard article={article} baseUrl={baseUrl} key={article.id} />
      ))}
    </div>
  );
};

export default ArticleList;
