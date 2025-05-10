import { client } from '../../../../Client.js';

export type retrieve_assignments_enabled_for_grade_export_to_sis_accountsPathParameters =
  {
    /**
     * The ID of the account to query.
     *
     * Format: 'int64'
     */
    account_id: number;
  };

export type retrieve_assignments_enabled_for_grade_export_to_sis_accountsSearchParameters =
  Partial<{
    /**
     * The ID of the course to query.
     *
     * Format: 'int64'
     */
    course_id: number;
    /**
     * When searching on an account,
     *
     * Format: date-time
     */
    starts_before: string;
    /**
     * When searching on an account,
     *
     * Format: date-time
     */
    ends_after: string;
    /** Array of additional */
    include: string;
  }>;

type Options = {
  pathParams: retrieve_assignments_enabled_for_grade_export_to_sis_accountsPathParameters;
} & (
  | {
      searchParams?: Partial<retrieve_assignments_enabled_for_grade_export_to_sis_accountsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: retrieve_assignments_enabled_for_grade_export_to_sis_accountsSearchParameters;
      strict: true;
    }
);

/**
 * Retrieve assignments enabled for grade export to SIS
 *
 * Retrieve a list of published assignments flagged as "post_to_sis". See the
 * Assignments API for more details on assignments. Assignment group and section
 * information are included for convenience.
 *
 * Each section includes course information for the origin course and the
 * cross-listed course, if applicable. The `origin_course` is the course to
 * which the section belongs or the course from which the section was
 * cross-listed. Generally, the `origin_course` should be preferred when
 * performing integration work. The `xlist_course` is provided for consistency
 * and is only present when the section has been cross-listed. See Sections API
 * and Courses Api for me details.
 *
 * The `override` is only provided if the Differentiated Assignments course
 * feature is turned on and the assignment has an override for that section.
 * When there is an override for the assignment the override object's
 * keys/values can be merged with the top level assignment object to create a
 * view of the assignment object specific to that section. See Assignments api
 * for more information on assignment overrides.
 *
 * Restricts to courses that start before this date (if they have a start date)
 * restricts to courses that end after this date (if they have an end date)
 * information to include.
 *
 * "student_overrides":: returns individual student override information
 *
 * Nickname: retrieve_assignments_enabled_for_grade_export_to_sis_accounts
 */
export async function retrieve_assignments_enabled_for_grade_export_to_sis_accounts(
  options: Options
) {
  return await client().fetchAs<void>(
    `/api/sis/accounts/{account_id}/assignments`,
    {
      method: 'GET',
      ...options
    }
  );
}
