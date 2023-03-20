import { Item } from '../../classes';
import { api } from '../api';

export async function getFeed(url: string) {
  let responseArr: Item[] = [];
  const response = await api.get(url).then((response) => response.data);
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(response, 'text/xml');
  const items = [].slice.call(xmlDoc.getElementsByTagName('item'));
  items.forEach((item: Element) => {
    let tempItem = new Item();
    tempItem.title =
      item.getElementsByTagName('title')[0]?.childNodes[0]?.nodeValue;
    tempItem.pubDate =
      item.getElementsByTagName('pubDate')[0]?.childNodes[0]?.nodeValue;
    tempItem.creator =
      item.getElementsByTagName('dc:creator')[0]?.childNodes[0]?.nodeValue;
    tempItem.description =
      item.getElementsByTagName('description')[0]?.childNodes[0]?.nodeValue;
    tempItem.link =
      item.getElementsByTagName('link')[0]?.childNodes[0]?.nodeValue;
    tempItem.mediaThumbnail = item
      .getElementsByTagName('media:thumbnail')[0]
      ?.getAttribute('url');
    responseArr.push(tempItem);
  });
  return responseArr;
}
