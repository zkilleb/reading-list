import React from 'react';
import { Item } from '../../classes';
import { ArticleCard } from '../../components';
import { Header } from '../../components/Header';
import { ArticleCardSkeleton } from '../../components/ArticleCard';
import { getArticles } from '../../hooks';

export function Home() {
  const [articles, setArticles] = React.useState<Item[]>();
  const [articlesShown] = React.useState(5);

  React.useEffect(() => {
    getArticles().then(setArticles);
  }, []);

  return (
    <div>
      <Header />
      {articles
        ? articles.map((article) => {
            return <ArticleCard key={article.link} {...article} />;
          })
        : Array.from(Array(articlesShown)).map(() => {
            return <ArticleCardSkeleton />;
          })}
    </div>
  );
}
