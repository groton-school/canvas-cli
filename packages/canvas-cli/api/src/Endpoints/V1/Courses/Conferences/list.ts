import { client } from '../../../../Client.js';
import { Conference } from '../../../../Resources/Conferences.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List conferences
 *
 * Retrieve the paginated list of conferences for this context
 *
 * This API returns a JSON object containing the list of conferences, the key
 * for the list of conferences is "conferences"
 *
 * Nickname: list_conferences_courses
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/conferences`,
    { method: 'GET', params: parameters }
  );
}
