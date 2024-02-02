import ArticleCard from '@/components/Card/ArticleCard';
import { Articles } from '@prisma/client';
import React, { FC } from 'react'

const getArticles = async () => {
    const endpoint = process.env.URL_ROOT ?? "http://localhost:3000";
    try {
      const data = await fetch(endpoint + "/api/articles/get-all");
      return data.json();
    } catch (err) {
      return err;
    }
  };
type ArticlesContainerProps = {
  
}

const ArticlesContainer: FC<ArticlesContainerProps> = async({  }) => {
    const articles : Articles[] = await getArticles();
    return (
        <>
           {articles.map((article, _i) => (
            <ArticleCard key={article.id} article={article}/>
          ))} 
        </>
      )
}

export default ArticlesContainer;