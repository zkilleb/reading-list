import { rssFeed } from '../constants/rssFeeds/rssFeeds';

export function getPreferences() {
  //TODO: Update this to pull actual preferences for feeds
  return [rssFeed.music.pitchfork[0], rssFeed.sports.soccer.espn[0]];
}
