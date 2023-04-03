import React from 'react';
import { Button } from '@mui/material';
import { Item } from '../../classes';
import { ArticleCard, Header, ArticleFilter } from '../../components';
import { ArticleCardSkeleton } from '../../components/ArticleCard';
import { getArticles } from '../../hooks';

export function Home() {
  const [articles, setArticles] = React.useState<Item[]>();
  const [visibleArticles, setVisibleArticles] = React.useState<Item[]>();
  const [articlesShown, setArticlesShown] = React.useState(5);
  const [filterValue, setFilterValue] = React.useState<string>('All Sites');
  const [filteredArticles, setFilteredArticles] = React.useState<Item[]>();

  React.useEffect(() => {
    getArticles().then(setArticles);
  }, []);

  React.useEffect(() => {
    let tempArticles;
    if (filterValue !== 'All Sites') {
      tempArticles = articles?.filter((article) => {
        return filterValue
          .split(', ')
          .some((el) =>
            article.link?.includes(
              el.toLowerCase().replaceAll('.', '').replaceAll(' ', ''),
            ),
          );
      });
    } else {
      tempArticles = articles;
    }
    setFilteredArticles(tempArticles);
    setVisibleArticles(tempArticles?.slice(0, articlesShown));
  }, [articles, articlesShown, filterValue]);

  const handleLoadMore = () => {
    setArticlesShown(articlesShown + 5);
  };

  const handleFilterChange = (display?: string) => {
    if (display) {
      setFilterValue(display);
    }
  };

  return (
    <div>
      <Header />
      {articles && (
        <ArticleFilter articles={articles} handleChange={handleFilterChange} />
      )}
      {visibleArticles
        ? visibleArticles.map((article) => {
            return <ArticleCard key={article.link} {...article} />;
          })
        : Array.from(Array(articlesShown)).map((item, index) => {
            return <ArticleCardSkeleton key={index} />;
          })}
      {visibleArticles &&
        filteredArticles &&
        filteredArticles.length > articlesShown && (
          <Button variant="contained" onClick={handleLoadMore}>
            Show More
          </Button>
        )}
    </div>
  );
}
