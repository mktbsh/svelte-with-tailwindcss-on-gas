import type { Response } from './types';

const HTML_TITLE = 'Sample app';
const HTML_FAVICON_URL = 'https://twemoji.maxcdn.com/v/latest/72x72/1f9d0.png';

/**
 * Trigger Function
 */
function doGet() {
  const html = HtmlService.createTemplateFromFile('index.html').evaluate();
  html.setTitle(HTML_TITLE);
  html.setFaviconUrl(HTML_FAVICON_URL);
  return html;
}

/**
 * API
 */
export const HEALTHCHECK_get = (): Response<string> => {
  return {
    timestamp: new Date().toISOString(),
    data: 'ok',
  };
};
