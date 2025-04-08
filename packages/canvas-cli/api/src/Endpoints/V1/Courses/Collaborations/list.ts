import { client } from '../../../../Client.js';
import { Collaboration } from '../../../../Resources/Collaborations.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List collaborations
 *
 * A paginated list of collaborations the current user has access to in the
 * context of the course provided in the url. NOTE: this only returns
 * ExternalToolCollaboration type collaborations.
 *
 * Curl https://<canvas>/api/v1/courses/1/collaborations/
 *
 * Nickname: list_collaborations_courses
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/collaborations`,
    { method: 'GET', params: parameters }
  );
}
