import { api } from 'datadirect';
import ejs from 'ejs';
import path from 'node:path';

export async function toHTML(news: api.datadirect.ContentItem.News.Content) {
  return await ejs.renderFile(path.join(import.meta.dirname, 'News.ejs'), {
    news
  });
}
