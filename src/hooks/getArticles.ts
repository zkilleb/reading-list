import dayjs from 'dayjs';
import { getFeed } from '../api/handlers';
import { Item } from '../classes';
import { getPreferences } from './getPreferences';

export async function getArticles() {
  const preferences = getPreferences();

  return Promise.all(preferences.map(getFeed)).then((data) => {
    return data.flat().sort((a: Item, b: Item) => {
      if (b.pubDate && a.pubDate)
        return dayjs(b.pubDate).unix() - dayjs(a.pubDate).unix();
      return 0;
    });
  });
}
