import { client } from '../../../../../Client.js';

export type accept_course_invitationPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: accept_course_invitationPathParameters;
};

/**
 * Accept Course Invitation
 *
 * Accepts a pending course invitation for the current user
 *
 * Nickname: accept_course_invitation
 */
export async function accept_course_invitation({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/enrollments/{id}/accept`,
    {
      method: 'POST',
      pathParams
    }
  );
}
