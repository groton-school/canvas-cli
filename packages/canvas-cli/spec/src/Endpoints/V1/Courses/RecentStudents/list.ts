import { User } from '../../../../Resources/Users.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List recently logged in students
 *
 * Returns the paginated list of users in this course, ordered by how recently
 * they have logged in. The records include the 'last_login' field which
 * contains a timestamp of the last time that user logged into canvas. The
 * querying user must have the 'View usage reports' permission.
 *
 * Nickname: list_recently_logged_in_students
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/courses/{course_id}/recent_students`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
