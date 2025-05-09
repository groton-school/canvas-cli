import { client } from '../../../../../Client.js';

export type reject_course_invitationPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: reject_course_invitationPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Reject Course Invitation
 *
 * Rejects a pending course invitation for the current user
 *
 * Nickname: reject_course_invitation
 */
export async function reject_course_invitation(options: Options) {
  return await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/enrollments/{id}/reject`,
    {
      method: 'POST',
      ...options
    }
  );
}
