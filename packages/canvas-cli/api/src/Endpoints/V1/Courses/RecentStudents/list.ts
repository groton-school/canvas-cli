import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { User } from '../../../../Resources/Users.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
};

export type listSearchParameters = Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

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
export async function list({ pathParams }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/recent_students`,
    {
      method: 'GET',
      pathParams
    }
  );
}
