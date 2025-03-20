import { DateTimeString, URLString } from '@battis/descriptive-types';
import { Colors } from '@battis/qui-cli.colors';
import { Log } from '@battis/qui-cli.log';
import ora from 'ora';
import { canvas, stringify } from './Client.js';
import * as Courses from './Courses.js';
import { isError } from './Error.js';

export type Model = {
  /** The ID of the feed */
  id: number;
  /** The title of the feed, pulled from the feed itself. If the feed hasn't yet
   * been pulled, a temporary name will be synthesized based on the URL */
  display_name: string;
  /** The HTTP/HTTPS URL to the feed */
  url: URLString;
  /** If not null, only feed entries whose title contains this string will trigger
   * new posts in Canvas */
  header_match: string;
  /** When this external feed was added to Canvas */
  created_at: DateTimeString<'ISO'>;
  /** The verbosity setting determines how much of the feed's content is imported
   * into Canvas as part of the posting. 'link_only' means that only the title and
   * a link to the item. 'truncate' means that a summary of the first portion of
   * the item body will be used. 'full' means that the full item body will be
   * used. */
  verbosity: 'full' | 'truncate' | 'link_only';
};

export type Parameters = {
  /** The url to the external rss or atom feed */
  url: URLString;
  /** If given, only feed entries that contain this string in their title will be imported */
  header_match?: string;
  /** Defaults to “full”

    Allowed values:
    full, truncate, link_only */
  verbosity?: Model['verbosity'];
};

type CreateOptions = {
  course: Courses.Model;
  args: Parameters;
};

export async function create({ course, args }: CreateOptions) {
  const spinner = ora(`Creating external feed ${Colors.url(args.url)}`).start();
  const result = (await canvas().fetch(
    `/api/v1/courses/${course.id}/external_feeds`,
    { method: 'POST', body: new URLSearchParams(stringify(args)) }
  )) as Model;
  if (isError(result)) {
    spinner.fail(`Error creating external feed ${Colors.url(args.url)}`);
    throw new Error(
      `Error creating external feed: ${Log.syntaxColor({ ...Courses.basic(course), args: stringify(args), error: result })}`
    );
  }
  spinner.succeed(`Created external feed ${Colors.url(result.url)}`);
  return result;
}
