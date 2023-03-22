import dayjs from 'dayjs';
import { getFeed } from '../api/handlers';
import { Item } from '../classes';
import { getPreferences } from './getPreferences';

export async function getArticles() {
  const preferences = getPreferences();
  const articleArr = [];

  for (let i = 0; i < preferences.length; i++) {
    const result = await getFeed(preferences[i]);
    articleArr.push(...result);
  }

  return articleArr.sort((a: Item, b: Item) => {
    if (b.pubDate && a.pubDate)
      return dayjs(b.pubDate).unix() - dayjs(a.pubDate).unix();
    return 0;
  });
}
