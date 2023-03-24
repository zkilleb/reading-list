import { rssFeed } from '../constants/rssFeeds/rssFeeds';

export function getPreferences() {
  //TODO: Update this to pull actual preferences for feeds
  return [...rssFeed.music.indie, ...rssFeed.sports.soccer];
}
