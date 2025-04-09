import { client } from '../../../Client.js';

export type delete_conclude_coursePathParameters = {
  /** ID */
  id: string;
};

export type delete_conclude_courseSearchParameters = {
  /** The action to take on the course. */
  event: string;
};

type Options = {
  pathParams: delete_conclude_coursePathParameters;
  searchParams?: delete_conclude_courseSearchParameters;
};

/**
 * Delete/Conclude a course
 *
 * Delete or conclude an existing course
 *
 * Nickname: delete_conclude_course
 */
export async function delete_conclude_course({
  pathParams,
  searchParams
}: Options) {
  return await client().fetchAs<void>(`/v1/courses/{id}`, {
    method: 'DELETE',
    pathParams,
    searchParams
  });
}
