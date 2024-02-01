import ArticleCard from '@/components/Card/ArticleCard';
import Card from '@/components/Card/ProjectCard';
import { ArticleType } from '@/types/ArticleType';
import { ProjectType } from '@/types/ProjectType';
import axios from 'axios';
import React, { FC } from 'react'

const getArticles = async () => {
    const endpoint = process.env.URL_ROOT ?? "http://localhost:3000";
    try {
      const data = await axios(endpoint + "/api/articles/get-all");
      return data.data;
    } catch (err) {
      return err;
    }
  };
type ArticlesContainerProps = {
  
}

const ArticlesContainer: FC<ArticlesContainerProps> = async({  }) => {
    const articles : ArticleType[] = await getArticles();
    return (
        <>
           {articles.map((article, _i) => (
            <ArticleCard article={article}/>
          ))} 
        </>
      )
}

export default ArticlesContainer;