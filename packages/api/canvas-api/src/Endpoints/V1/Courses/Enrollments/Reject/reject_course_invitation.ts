import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type reject_course_invitationPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type reject_course_invitationSearchParameters = Masquerade;

type Options = {
  pathParams: reject_course_invitationPathParameters;
} & (
  | {
      searchParams?: Partial<reject_course_invitationSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: reject_course_invitationSearchParameters;
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
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/enrollments/{id}/reject`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
