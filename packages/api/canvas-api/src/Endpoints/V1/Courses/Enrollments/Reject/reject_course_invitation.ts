import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type reject_course_invitationPathParameters = {
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

export type reject_course_invitationSearchParameters = Masquerade;

type Options = (
  | {
      path: reject_course_invitationPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: reject_course_invitationPathParameters;
    }
) &
  (
    | {
        query?: Partial<reject_course_invitationSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<reject_course_invitationSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: reject_course_invitationSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: reject_course_invitationSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Reject Course Invitation
 *
 * rejects a pending course invitation for the current user
 *
 * nickname: reject_course_invitation
 *
 *
 *
 *
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
