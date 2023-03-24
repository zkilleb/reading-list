import { Item } from '../../classes';
import { findSiteName } from '../../util/stringUtils';
import { api } from '../api';

export async function getFeed(url: string) {
  let responseArr: Item[] = [];
  try {
    const response = await api.get(url).then((response) => response.data);
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(response, 'text/xml');
    const items =
      [].slice.call(xmlDoc.getElementsByTagName('item')).length > 0
        ? [].slice.call(xmlDoc.getElementsByTagName('item'))
        : [].slice.call(xmlDoc.getElementsByTagName('entry'));
    items.forEach((item: Element) => {
      let tempItem = new Item();
      tempItem.title =
        item.getElementsByTagName('title')[0]?.childNodes[0]?.nodeValue;
      tempItem.pubDate = item.getElementsByTagName('pubDate')[0]?.childNodes[0]
        ?.nodeValue
        ? item.getElementsByTagName('pubDate')[0]?.childNodes[0]?.nodeValue
        : item.getElementsByTagName('published')[0]?.childNodes[0]?.nodeValue;
      tempItem.creator = item.getElementsByTagName('dc:creator')[0]
        ?.childNodes[0]?.nodeValue
        ? item.getElementsByTagName('dc:creator')[0]?.childNodes[0]?.nodeValue
        : item.getElementsByTagName('name')[0]?.childNodes[0]?.nodeValue;
      tempItem.description =
        item.getElementsByTagName('description')[0]?.childNodes[0]?.nodeValue;
      tempItem.link = item.getElementsByTagName('link')[0]?.childNodes[0]
        ?.nodeValue
        ? item.getElementsByTagName('link')[0]?.childNodes[0]?.nodeValue
        : item.getElementsByTagName('link')[0]?.getAttribute('href');
      if (tempItem.link) tempItem.site = findSiteName(tempItem.link);
      tempItem.mediaThumbnail = item
        .getElementsByTagName('media:thumbnail')[0]
        ?.getAttribute('url');
      responseArr.push(tempItem);
    });
  } catch (e) {
    console.log(`Error getting feed for ${url}`);
  }
  return responseArr;
}
