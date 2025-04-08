import { client } from '../../../../Client.js';
import { User } from '../../../../Resources/Users.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Search for content share users
 *
 * Returns a paginated list of users you can share content with. Requires the
 * content share feature and the user must have the manage content permission
 * for the course.
 *
 * Nickname: search_for_content_share_users
 */
export async function search_for_content_share_users({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/content_share_users`,
    { method: 'GET', params: parameters }
  );
}
