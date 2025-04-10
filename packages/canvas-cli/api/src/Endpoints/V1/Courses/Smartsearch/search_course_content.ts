import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { SearchResult } from '../../../../Resources/SmartSearch.js';

export type search_course_contentPathParameters = {
  /** ID */
  course_id: string;
};

export type search_course_contentSearchParameters = {
  /** The search query */
  q: string;
  /**
   * Types of objects to search. By default, all supported types are searched.
   * Supported types include +pages+, +assignments+, +announcements+, and
   * +discussion_topics+.
   */
  filter: string[];
} & Paginated;

type Options = {
  pathParams: search_course_contentPathParameters;
} & (
  | {
      searchParams?: Partial<search_course_contentSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: search_course_contentSearchParameters;
      strict: true;
    }
);

/**
 * Search course content
 *
 * Find course content using a meaning-based search
 *
 * Nickname: search_course_content
 */
export async function search_course_content({
  pathParams,
  searchParams
}: Options) {
  return await client().fetchAs<SearchResult[]>(
    `/v1/courses/{course_id}/smartsearch`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
