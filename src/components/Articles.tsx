import React from "react";
import axios from "axios";

import ArticleItem from "./ArticleItem";
import { Article } from "../models";

const { useEffect, useState } = React;

async function loadData(): Promise<Article[]> {
  const { data } = await axios.get("https://fake-article-api.now.sh/articles");
  return data;
}

const Articles = (): JSX.Element => {
  const [articles, setArticles] = useState<Article[] | null>(null);

  useEffect(() => {
    loadData().then((data) => setArticles(data));
  }, []);

  if (!articles) {
    return <div>Loading...</div>;
  }

  const articleElements = articles.map((article) => {
    const { id, ...rest } = article;
    return (
      <ArticleItem key={id} {...rest} bookmarked={false} userLoggedIn={false} />
    );
  });

  return <ul>{articleElements}</ul>;
};

export default Articles;
