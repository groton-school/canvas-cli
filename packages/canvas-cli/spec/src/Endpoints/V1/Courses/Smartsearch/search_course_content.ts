import { SearchResult } from '../../../../Resources/SmartSearch.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Search course content
 *
 * Find course content using a meaning-based search
 *
 * Nickname: search_course_content
 */
export async function search_course_content({
  parameters
}: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/courses/{course_id}/smartsearch`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
