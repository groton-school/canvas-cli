import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { Enrollment } from '../../../../../Resources/Enrollments.js';

export type re_activate_enrollmentPathParameters = {
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

export type re_activate_enrollmentSearchParameters = Masquerade;

type Options = (
  | {
      path: re_activate_enrollmentPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: re_activate_enrollmentPathParameters;
    }
) &
  (
    | {
        query?: Partial<re_activate_enrollmentSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<re_activate_enrollmentSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: re_activate_enrollmentSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: re_activate_enrollmentSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Re-activate an enrollment
 *
 * Activates an inactive enrollment
 *
 * Nickname: re_activate_enrollment
 */
export async function re_activate_enrollment(options: Options) {
  const response = await client().fetchAs<Enrollment>(
    `/api/v1/courses/{course_id}/enrollments/{id}/reactivate`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
