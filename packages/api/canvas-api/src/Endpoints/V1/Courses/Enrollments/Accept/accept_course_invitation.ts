import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type accept_course_invitationPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  course_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  id: string | number;
};

export type accept_course_invitationSearchParameters = Masquerade;

type Options = (
  | {
      path: accept_course_invitationPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: accept_course_invitationPathParameters;
    }
) &
  (
    | {
        query?: Partial<accept_course_invitationSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<accept_course_invitationSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: accept_course_invitationSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: accept_course_invitationSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Accept Course Invitation
 *
 * accepts a pending course invitation for the current user
 *
 * nickname: accept_course_invitation
 *
 *
 *
 *
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
