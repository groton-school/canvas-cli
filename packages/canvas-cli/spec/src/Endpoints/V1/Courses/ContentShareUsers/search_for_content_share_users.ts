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
export async function search_for_content_share_users({
  parameters
}: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/courses/{course_id}/content_share_users`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
