import ejs from 'ejs';
import path from 'node:path';

export * as Canvas from './Canvas/index.js';
export * as Podium from './Podium/index.js';

export async function render(
  template: string,
  data?: ejs.Data,
  options?: ejs.Options
) {
  return await ejs.renderFile(
    path.resolve(import.meta.dirname, template),
    data,
    { rmWhitespace: true, ...options }
  );
}
