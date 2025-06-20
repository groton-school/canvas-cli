import { Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../Client.js';
import { Course } from '../../../Resources/Courses.js';

export type listSearchParameters = Partial<{
  /**
   * When set, only return courses where the user is enrolled as this type.
   * For example, set to "teacher" to return only courses where the user is
   * enrolled as a Teacher. This argument is ignored if enrollment_role is
   * given.
   */
  enrollment_type: string;
  /**
   * Deprecated When set, only return courses where the user is enrolled with
   * the specified course-level role. This can be a role created with the
   * {api:RoleOverridesController#add_role Add Role API} or a base role type
   * of 'StudentEnrollment', 'TeacherEnrollment', 'TaEnrollment',
   * 'ObserverEnrollment', or 'DesignerEnrollment'.
   */
  enrollment_role: string;
  /**
   * When set, only return courses where the user is enrolled with the
   * specified course-level role. This can be a role created with the
   * {api:RoleOverridesController#add_role Add Role API} or a built_in role
   * type of 'StudentEnrollment', 'TeacherEnrollment', 'TaEnrollment',
   * 'ObserverEnrollment', or 'DesignerEnrollment'.
   *
   * Format: 'int64'
   */
  enrollment_role_id: number;
  /**
   * When set, only return courses where the user has an enrollment with the
   * given state. This will respect section/course/term date overrides.
   */
  enrollment_state: string;
  /**
   * When set, only return courses that are not configured as blueprint
   * courses.
   */
  exclude_blueprint_courses: boolean;
  /**
   * - "needs_grading_count": Optional information to include with each Course.
   *   When needs_grading_count is given, and the current user has grading
   *   rights, the total number of submissions needing grading for all
   *   assignments is returned.
   * - "syllabus_body": Optional information to include with each Course. When
   *   syllabus_body is given the user-generated html for the course syllabus
   *   is returned.
   * - "public_description": Optional information to include with each Course.
   *   When public_description is given the user-generated text for the course
   *   public description is returned.
   * - "total_scores": Optional information to include with each Course. When
   *   total_scores is given, any student enrollments will also include the
   *   fields 'computed_current_score', 'computed_final_score',
   *   'computed_current_grade', and 'computed_final_grade', as well as (if
   *   the user has permission) 'unposted_current_score',
   *   'unposted_final_score', 'unposted_current_grade', and
   *   'unposted_final_grade' (see Enrollment documentation for more
   *   information on these fields). This argument is ignored if the course is
   *   configured to hide final grades.
   * - "current_grading_period_scores": Optional information to include with
   *   each Course. When current_grading_period_scores is given and
   *   total_scores is given, any student enrollments will also include the
   *   fields 'has_grading_periods', 'totals_for_all_grading_periods_option',
   *   'current_grading_period_title', 'current_grading_period_id',
   *   current_period_computed_current_score',
   *   'current_period_computed_final_score',
   *   'current_period_computed_current_grade', and
   *   'current_period_computed_final_grade', as well as (if the user has
   *   permission) 'current_period_unposted_current_score',
   *   'current_period_unposted_final_score',
   *   'current_period_unposted_current_grade', and
   *   'current_period_unposted_final_grade' (see Enrollment documentation for
   *   more information on these fields). In addition, when this argument is
   *   passed, the course will have a 'has_grading_periods' attribute on it.
   *   This argument is ignored if the total_scores argument is not included.
   *   If the course is configured to hide final grades, the following fields
   *   are not returned: 'totals_for_all_grading_periods_option',
   *   'current_period_computed_current_score',
   *   'current_period_computed_final_score',
   *   'current_period_computed_current_grade',
   *   'current_period_computed_final_grade',
   *   'current_period_unposted_current_score',
   *   'current_period_unposted_final_score',
   *   'current_period_unposted_current_grade', and
   *   'current_period_unposted_final_grade'
   * - "grading_periods": Optional information to include with each Course. When
   *   grading_periods is given, a list of the grading periods associated with
   *   each course is returned.
   * - "term": Optional information to include with each Course. When term is
   *   given, the information for the enrollment term for each course is
   *   returned.
   * - "account": Optional information to include with each Course. When account
   *   is given, the account json for each course is returned.
   * - "course_progress": Optional information to include with each Course. When
   *   course_progress is given, each course will include a 'course_progress'
   *   object with the fields: 'requirement_count', an integer specifying the
   *   total number of requirements in the course,
   *   'requirement_completed_count', an integer specifying the total number
   *   of requirements in this course that have been completed, and
   *   'next_requirement_url', a string url to the next requirement item, and
   *   'completed_at', the date the course was completed (null if incomplete).
   *   'next_requirement_url' will be null if all requirements have been
   *   completed or the current module does not require sequential progress.
   *   "course_progress" will return an error message if the course is not
   *   module based or the user is not enrolled as a student in the course.
   * - "sections": Section enrollment information to include with each Course.
   *   Returns an array of hashes containing the section ID (id), section name
   *   (name), start and end dates (start_at, end_at), as well as the
   *   enrollment type (enrollment_role, e.g. 'StudentEnrollment').
   * - "storage_quota_used_mb": The amount of storage space used by the files in
   *   this course
   * - "total_students": Optional information to include with each Course.
   *   Returns an integer for the total amount of active and invited
   *   students.
   * - "passback_status": Include the grade passback_status
   * - "favorites": Optional information to include with each Course. Indicates
   *   if the user has marked the course as a favorite course.
   * - "teachers": Teacher information to include with each Course. Returns an
   *   array of hashes containing the {api:Users:UserDisplay UserDisplay}
   *   information for each teacher in the course.
   * - "observed_users": Optional information to include with each Course. Will
   *   include data for observed users if the current user has an observer
   *   enrollment.
   * - "tabs": Optional information to include with each Course. Will include
   *   the list of tabs configured for each course. See the
   *   {api:TabsController#index List available tabs API} for more
   *   information.
   * - "course_image": Optional information to include with each Course. Returns
   *   course image url if a course image has been set.
   * - "banner_image": Optional information to include with each Course. Returns
   *   course banner image url if the course is a Canvas for Elementary
   *   subject and a banner image has been set.
   * - "concluded": Optional information to include with each Course. Indicates
   *   whether the course has been concluded, taking course and term dates
   *   into account.
   * - "post_manually": Optional information to include with each Course.
   *   Returns true if the course post policy is set to Manually post grades.
   *   Returns false if the the course post policy is set to Automatically
   *   post grades.
   */
  include: string[];
  /**
   * If set, only return courses that are in the given state(s). By default,
   * "available" is returned for students and observers, and anything except
   * "deleted", for all other enrollment types
   */
  state: string[];
}> &
  Paginated;

type Options =
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    };

/**
 * List your courses
 *
 * Returns the paginated list of active courses for the current user.
 *
 * Nickname: list_your_courses
 */
export async function list(options: Options) {
  const response = await client().fetchAs<Course[]>(`/api/v1/courses`, {
    method: 'GET',
    ...options
  });
  return response;
}
