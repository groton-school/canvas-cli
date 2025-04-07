import { Deprecated } from '';
import { Enrollment } from '../../../../Resources/Enrollments.js';

type Parameters = {
  /**
   * The start time of the enrollment, in ISO8601 format. e.g.
   * 2012-04-18T23:08:51Z
   *
   * Format: 'date-time'
   */
  'enrollment[start_at]': string;
  /**
   * The end time of the enrollment, in ISO8601 format. e.g.
   * 2012-04-18T23:08:51Z
   *
   * Format: 'date-time'
   */
  'enrollment[end_at]': string;
  /** The ID of the user to be enrolled in the course. */
  'enrollment[user_id]': string;
  /**
   * Enroll the user as a student, teacher, TA, observer, or designer. If no
   * value is given, the type will be inferred by enrollment[role] if
   * supplied, otherwise 'StudentEnrollment' will be used.
   */
  'enrollment[type]': string;
  /** Assigns a custom course-level role to the user. */
  'enrollment[role]': Deprecated;
  /**
   * Assigns a custom course-level role to the user.
   *
   * Format: int64
   */
  'enrollment[role_id]': number;
  /**
   * If set to 'active,' student will be immediately enrolled in the course.
   * Otherwise they will be required to accept a course invitation. Default is
   * 'invited.'.
   *
   * If set to 'inactive', student will be listed in the course roster for
   * teachers, but will not be able to participate in the course until their
   * enrollment is activated.
   */
  'enrollment[enrollment_state]': string;
  /**
   * The ID of the course section to enroll the student in. If the
   * section-specific URL is used, this argument is redundant and will be
   * ignored.
   *
   * Format: int64
   */
  'enrollment[course_section_id]': number;
  /**
   * If set, the enrollment will only allow the user to see and interact with
   * users enrolled in the section given by course_section_id. For teachers
   * and TAs, this includes grading privileges. Section-limited students will
   * not see any users (including teachers and TAs) not enrolled in their
   * sections. Users may have other enrollments that grant privileges to
   * multiple sections in the same course.
   */
  'enrollment[limit_privileges_to_course_section]': boolean;
  /**
   * If true, a notification will be sent to the enrolled user. Notifications
   * are not sent by default.
   */
  'enrollment[notify]': boolean;
  /**
   * If the current user is not allowed to manage enrollments in this course,
   * but the course allows self-enrollment, the user can self- enroll as a
   * student in the default section by passing in a valid code. When
   * self-enrolling, the user_id must be 'self'. The enrollment_state will be
   * set to 'active' and all other arguments will be ignored.
   */
  'enrollment[self_enrollment_code]': string;
  /**
   * If true, marks the enrollment as a self-enrollment, which gives students
   * the ability to drop the course if desired. Defaults to false.
   */
  'enrollment[self_enrolled]': boolean;
  /**
   * For an observer enrollment, the ID of a student to observe. This is a
   * one-off operation; to automatically observe all a student's enrollments
   * (for example, as a parent), please use the
   * {api:UserObserveesController#create User Observees API}.
   *
   * Format: int64
   */
  'enrollment[associated_user_id]': number;
  /**
   * Required if the user is being enrolled from another trusted account. The
   * unique identifier for the user (sis_user_id) must also be accompanied by
   * the root_account parameter. The user_id will be ignored.
   */
  'enrollment[sis_user_id]': string;
  /**
   * Required if the user is being enrolled from another trusted account. The
   * unique identifier for the user (integration_id) must also be accompanied
   * by the root_account parameter. The user_id will be ignored.
   */
  'enrollment[integration_id]': string;
  /**
   * The domain of the account to search for the user. Will be a no-op unless
   * the sis_user_id or integration_id parameter is also included.
   */
  root_account: string;
};

type Options = {
  parameters: Parameters;
};

/**
 * Enroll a user
 *
 * Create a new user enrollment for a course or section.
 *
 * Nickname: enroll_user_sections
 */
export async function enroll_user_sections({
  parameters
}: Options): Promise<Enrollment> {
  return await (
    await fetch(`/v1/sections/{section_id}/enrollments`, {
      method: 'POST',
      body: parameters
    })
  ).json();
}
