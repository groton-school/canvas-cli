import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { Enrollment } from '../../../../Resources/Enrollments.js';

export type listPathParameters = {
  /**
   * Filter by user_id (only valid for course or section enrollment queries).
   * If set to the current user's id, this is a way to determine if the user
   * has any enrollments in the course or section, independent of whether the
   * user has permission to view other people on the roster.
   */
  user_id: string;
};

export type listSearchParameters = {
  /**
   * A list of enrollment types to return. Accepted values are
   * 'StudentEnrollment', 'TeacherEnrollment', 'TaEnrollment',
   * 'DesignerEnrollment', and 'ObserverEnrollment.' If omitted, all
   * enrollment types are returned. This argument is ignored if `role` is
   * given.
   */
  type: string[];
  /**
   * A list of enrollment roles to return. Accepted values include
   * course-level roles created by the {api:RoleOverridesController#add_role
   * Add Role API} as well as the base enrollment types accepted by the `type`
   * argument above.
   */
  role: string[];
  /**
   * Filter by enrollment state. If omitted, 'active' and 'invited'
   * enrollments are returned. The following synthetic states are supported
   * only when querying a user's enrollments (either via user_id argument or
   * via user enrollments endpoint): +current_and_invited+,
   * +current_and_future+, +current_future_and_restricted+,
   * +current_and_concluded+
   */
  state: string[];
  /**
   * Array of additional information to include on the enrollment or user
   * records. "avatar_url" and "group_ids" will be returned on the user
   * record. If "current_points" is specified, the fields "current_points" and
   * (if the caller has permissions to manage grades)
   * "unposted_current_points" will be included in the "grades" hash for
   * student enrollments.
   */
  include: string[];
  /**
   * Return grades for the given grading_period. If this parameter is not
   * specified, the returned grades will be for the whole course.
   *
   * Format: 'int64'
   */
  grading_period_id: number;
  /**
   * Returns only enrollments for the specified enrollment term. This
   * parameter only applies to the user enrollments path. May pass the ID from
   * the enrollment terms api or the SIS id prepended with 'sis_term_id:'.
   *
   * Format: 'int64'
   */
  enrollment_term_id: number;
  /**
   * Returns only enrollments for the specified SIS account ID(s). Does not
   * look into sub_accounts. May pass in array or string.
   */
  sis_account_id: string[];
  /**
   * Returns only enrollments matching the specified SIS course ID(s). May
   * pass in array or string.
   */
  sis_course_id: string[];
  /**
   * Returns only section enrollments matching the specified SIS section
   * ID(s). May pass in array or string.
   */
  sis_section_id: string[];
  /**
   * Returns only enrollments for the specified SIS user ID(s). May pass in
   * array or string.
   */
  sis_user_id: string[];
  /**
   * If sis_user_id is present and created_for_sis_id is true, Returns only
   * enrollments for the specified SIS ID(s). If a user has two sis_id's, one
   * enrollment may be created using one of the two ids. This would limit the
   * enrollments returned from the endpoint to enrollments that were created
   * from a sis_import with that sis_user_id
   */
  created_for_sis_id: boolean[];
} & Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams?: listSearchParameters;
      strict: true;
    }
);

/**
 * List enrollments
 *
 * Depending on the URL given, return a paginated list of either (1) all of the
 * enrollments in a course, (2) all of the enrollments in a section or (3) all
 * of a user's enrollments. This includes student, teacher, TA, and observer
 * enrollments.
 *
 * If a user has multiple enrollments in a context (e.g. as a teacher and a
 * student or in multiple course sections), each enrollment will be listed
 * separately.
 *
 * Note: Currently, only a root level admin user can return other users'
 * enrollments. A user can, however, return his/her own enrollments.
 *
 * Enrollments scoped to a course context will include inactive states by
 * default if the caller has account admin authorization and the state[]
 * parameter is omitted.
 *
 * Nickname: list_enrollments_users
 */
export async function list({ pathParams, searchParams }: Options) {
  return await client().fetchAs<Enrollment[]>(
    `/v1/users/{user_id}/enrollments`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
