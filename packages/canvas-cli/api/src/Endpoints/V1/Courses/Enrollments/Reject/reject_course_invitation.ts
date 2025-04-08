import { client } from '../../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Reject Course Invitation
 *
 * Rejects a pending course invitation for the current user
 *
 * Nickname: reject_course_invitation
 */
export async function reject_course_invitation({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/enrollments/{id}/reject`,
    { method: 'POST', params: parameters }
  );
}
