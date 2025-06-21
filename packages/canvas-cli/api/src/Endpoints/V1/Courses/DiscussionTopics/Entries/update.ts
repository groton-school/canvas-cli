import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';

export type updatePathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  topic_id: string;
  /** ID */
  id: string;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /** The updated body of the entry. */
  message: string;
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      searchParams?: Partial<updateSearchParameters>;
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      searchParams: updateSearchParameters;
      params: updateFormParameters;
      strict: true;
    }
);

/**
 * Update an entry
 *
 * Update an existing discussion entry.
 *
 * The entry must have been created by the current user, or the current user
 * must have admin rights to the discussion. If the edit is not allowed, a 401
 * will be returned.
 *
 * Nickname: update_entry_courses
 */
export async function update(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/discussion_topics/{topic_id}/entries/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
