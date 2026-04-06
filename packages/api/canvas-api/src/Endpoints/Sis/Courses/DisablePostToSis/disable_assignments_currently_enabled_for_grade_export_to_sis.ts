import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type disable_assignments_currently_enabled_for_grade_export_to_sisPathParameters =
  {
    /**
     * The ID of the course.
     *
     * Type: integer
     *
     * Format: 'int64'
     */
    course_id: number | string;
  };

export type disable_assignments_currently_enabled_for_grade_export_to_sisSearchParameters =
  Masquerade;

export type disable_assignments_currently_enabled_for_grade_export_to_sisFormParameters =
  Masquerade & {
    /**
     * The ID of the grading period.
     *
     * Type: integer
     *
     * Format: 'int64'
     */
    grading_period_id: number | string;
  };

type Options = (
  | {
      path: disable_assignments_currently_enabled_for_grade_export_to_sisPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: disable_assignments_currently_enabled_for_grade_export_to_sisPathParameters;
    }
) &
  (
    | {
        query?: Partial<disable_assignments_currently_enabled_for_grade_export_to_sisSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<disable_assignments_currently_enabled_for_grade_export_to_sisSearchParameters>;
        body?: Partial<disable_assignments_currently_enabled_for_grade_export_to_sisFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<disable_assignments_currently_enabled_for_grade_export_to_sisFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: disable_assignments_currently_enabled_for_grade_export_to_sisSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: disable_assignments_currently_enabled_for_grade_export_to_sisSearchParameters;
          }
      ) &
        (
          | {
              body: disable_assignments_currently_enabled_for_grade_export_to_sisFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: disable_assignments_currently_enabled_for_grade_export_to_sisFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Disable assignments currently enabled for grade export to SIS
 *
 * Disable all assignments flagged as "post_to_sis", with the option of making
 * it specific to a grading period, in a course.
 *
 * On success, the response will be 204 No Content with an empty body.
 *
 * On failure, the response will be 400 Bad Request with a body of a specific
 * message.
 *
 * For disabling assignments in a specific grading period
 *
 * Nickname: disable_assignments_currently_enabled_for_grade_export_to_sis
 */
export async function disable_assignments_currently_enabled_for_grade_export_to_sis(
  options: Options
) {
  const response = await client().fetchAs<JSONValue>(
    `/api/sis/courses/{course_id}/disable_post_to_sis`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
