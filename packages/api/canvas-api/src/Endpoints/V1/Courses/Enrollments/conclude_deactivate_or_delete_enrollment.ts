import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { Enrollment } from '../../../../Resources/Enrollments.js';

export type conclude_deactivate_or_delete_enrollmentPathParameters = {
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

export type conclude_deactivate_or_delete_enrollmentSearchParameters =
  Masquerade &
    Partial<{
      /**
     * The action to take on the enrollment.
When inactive, a user will still appear in the course roster to admins, but be unable to participate.
(&quot;inactivate&quot; and &quot;deactivate&quot; are equivalent tasks)
     *
     * 
     *
     * 
     */
      task: string;
    }>;

type Options = (
  | {
      path: conclude_deactivate_or_delete_enrollmentPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: conclude_deactivate_or_delete_enrollmentPathParameters;
    }
) &
  (
    | {
        query?: Partial<conclude_deactivate_or_delete_enrollmentSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<conclude_deactivate_or_delete_enrollmentSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: conclude_deactivate_or_delete_enrollmentSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: conclude_deactivate_or_delete_enrollmentSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Conclude, deactivate, or delete an enrollment
 *
 * Conclude, deactivate, or delete an enrollment. If the +task+ argument isn't given, the enrollment
will be concluded.
 *
 * nickname: conclude_deactivate_or_delete_enrollment
 *
 * 
 *
 * 
 */
export async function conclude_deactivate_or_delete_enrollment(
  options: Options
) {
  const response = await client().fetchAs<Enrollment>(
    `/api/v1/courses/{course_id}/enrollments/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
