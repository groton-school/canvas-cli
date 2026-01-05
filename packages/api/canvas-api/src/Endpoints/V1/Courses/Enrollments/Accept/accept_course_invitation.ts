import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';

export type accept_course_invitationPathParameters = {
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

export type accept_course_invitationSearchParameters = Masquerade;

type Options = {
  pathParams: accept_course_invitationPathParameters;
} & (
  | {
      searchParams?: Partial<accept_course_invitationSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: accept_course_invitationSearchParameters;
      strict: true;
    }
);

/**
 * Accept Course Invitation
 *
 * Accepts a pending course invitation for the current user
 *
 * Nickname: accept_course_invitation
 */
export async function accept_course_invitation(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/enrollments/{id}/accept`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
