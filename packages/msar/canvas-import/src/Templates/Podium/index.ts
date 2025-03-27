import path from 'node:path';

export * as Content from './Content/index.js';

export const Assignment = path.join(import.meta.dirname, 'Assignment.ejs');
export const Page = path.join(import.meta.dirname, 'Page.ejs');
