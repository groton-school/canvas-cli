import { api } from 'datadirect';

function itemToHTML(newsItem: api.datadirect.ContentItem.News.News) {
  return `<dt class="title">${newsItem.Name}<dt><dd class="brief">${newsItem.BriefDescription}</dd><dd class="description">${newsItem.Description}</dd>`;
}

export function widgetToHTML(news: api.datadirect.ContentItem.News.Content) {
  return `<dl class="blackbaud datadirect content news">${news.map((newsItem) => itemToHTML(newsItem)).join('')}</dl>`;
}
