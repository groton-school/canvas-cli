import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { User } from '../../../../Resources/Users.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
};

export type listSearchParameters = {
  /**
   * The partial name or full ID of the users to match and return in the
   * results list.
   */
  search_term: string;
  /** When set, sort the results of the search based on the given field. */
  sort: string;
  /**
   * When set, only return users where the user is enrolled as this type.
   * "student_view" implies include[]=test_student. This argument is ignored
   * if enrollment_role is given.
   */
  enrollment_type: string[];
  /**
   * Deprecated When set, only return users enrolled with the specified
   * course-level role. This can be a role created with the
   * {api:RoleOverridesController#add_role Add Role API} or a base role type
   * of 'StudentEnrollment', 'TeacherEnrollment', 'TaEnrollment',
   * 'ObserverEnrollment', or 'DesignerEnrollment'.
   */
  enrollment_role: string;
  /**
   * When set, only return courses where the user is enrolled with the
   * specified course-level role. This can be a role created with the
   * {api:RoleOverridesController#add_role Add Role API} or a built_in role id
   * with type 'StudentEnrollment', 'TeacherEnrollment', 'TaEnrollment',
   * 'ObserverEnrollment', or 'DesignerEnrollment'.
   *
   * Format: 'int64'
   */
  enrollment_role_id: number;
  /**
   * - "enrollments": Optionally include with each Course the user's current and
   *   invited enrollments. If the user is enrolled as a student, and the
   *   account has permission to manage or view all grades, each enrollment
   *   will include a 'grades' key with 'current_score', 'final_score',
   *   'current_grade' and 'final_grade' values.
   * - "locked": Optionally include whether an enrollment is locked.
   * - "avatar_url": Optionally include avatar_url.
   * - "bio": Optionally include each user's bio.
   * - "test_student": Optionally include the course's Test Student, if present.
   *   Default is to not include Test Student.
   * - "custom_links": Optionally include plugin-supplied custom links for each
   *   student, such as analytics information
   * - "current_grading_period_scores": if enrollments is included as well as
   *   this directive, the scores returned in the enrollment will be for the
   *   current grading period if there is one. A 'grading_period_id' value
   *   will also be included with the scores. if grading_period_id is nil
   *   there is no current grading period and the score is a total score.
   * - "uuid": Optionally include the users uuid
   */
  include: string[];
  /**
   * If this parameter is given and it corresponds to a user in the course,
   * the +page+ parameter will be ignored and the page containing the
   * specified user will be returned instead.
   */
  user_id: string;
  /**
   * If included, the course users set will only include users with IDs
   * specified by the param. Note: this will not work in conjunction with the
   * "user_id" argument but multiple user_ids can be included.
   *
   * Format: 'int64'
   */
  user_ids: number[];
  /**
   * When set, only return users where the enrollment workflow state is of one
   * of the given types. "active" and "invited" enrollments are returned by
   * default.
   */
  enrollment_state: string[];
} & Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    }
);

/**
 * List users in course
 *
 * Returns the paginated list of users in this course. And optionally the user's
 * enrollments in the course.
 *
 * Nickname: list_users_in_course_users
 */
export async function list(options: Options) {
  return await client().fetchAs<User[]>(`/api/v1/courses/{course_id}/users`, {
    method: 'GET',
    ...options
  });
}
