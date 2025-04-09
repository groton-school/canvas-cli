import { client } from '../../../../../Client.js';

type getPathParameters = {
  /** ID */
  course_id: string;
};

type Options = {
  pathParams: getPathParameters;
};

/**
 * Get quota information
 *
 * Returns the total and used storage quota for the course, group, or user.
 *
 * Nickname: get_quota_information_courses
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<void>(`/v1/courses/{course_id}/files/quota`, {
    method: 'GET',
    pathParams
  });
}
