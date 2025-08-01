import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /**
   * Let student final grades for a grading period or the total grades for the
   * course be overridden
   *
   * Type: boolean
   */
  allow_final_grade_override: boolean | string;
  /**
   * Let students create discussion topics
   *
   * Type: boolean
   */
  allow_student_discussion_topics: boolean | string;
  /**
   * Let students attach files to discussions
   *
   * Type: boolean
   */
  allow_student_forum_attachments: boolean | string;
  /**
   * Let students edit or delete their own discussion replies
   *
   * Type: boolean
   */
  allow_student_discussion_editing: boolean | string;
  /**
   * Let students organize their own groups
   *
   * Type: boolean
   */
  allow_student_organized_groups: boolean | string;
  /**
   * Let students report offensive discussion content
   *
   * Type: boolean
   */
  allow_student_discussion_reporting: boolean | string;
  /**
   * Let students create anonymous discussion topics
   *
   * Type: boolean
   */
  allow_student_anonymous_discussion_topics: boolean | string;
  /**
   * Filter SpeedGrader to only the selected student group
   *
   * Type: boolean
   */
  filter_speed_grader_by_student_group: boolean | string;
  /**
   * Hide totals in student grades summary
   *
   * Type: boolean
   */
  hide_final_grades: boolean | string;
  /**
   * Hide grade distribution graphs from students
   *
   * Type: boolean
   */
  hide_distribution_graphs: boolean | string;
  /**
   * Disallow students from viewing students in sections they do not belong to
   *
   * Type: boolean
   */
  hide_sections_on_course_users_page: boolean | string;
  /**
   * Disable comments on announcements
   *
   * Type: boolean
   */
  lock_all_announcements: boolean | string;
  /**
   * Copyright and license information must be provided for files before they
   * are published.
   *
   * Type: boolean
   */
  usage_rights_required: boolean | string;
  /**
   * Restrict students from viewing courses after end date
   *
   * Type: boolean
   */
  restrict_student_past_view: boolean | string;
  /**
   * Restrict students from viewing courses before start date
   *
   * Type: boolean
   */
  restrict_student_future_view: boolean | string;
  /**
   * Show the most recent announcements on the Course home page (if a Wiki,
   * defaults to five announcements, configurable via
   * home_page_announcement_limit). Canvas for Elementary subjects ignore this
   * setting.
   *
   * Type: boolean
   */
  show_announcements_on_home_page: boolean | string;
  /**
   * Limit the number of announcements on the home page if enabled via
   * show_announcements_on_home_page
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  home_page_announcement_limit: number | string;
  /**
   * Show the course summary (list of assignments and calendar events) on the
   * syllabus page. Default is true.
   *
   * Type: boolean
   */
  syllabus_course_summary: boolean | string;
  /**
   * Set the default due time for assignments. This is the time that will be
   * pre-selected in the Canvas user interface when setting a due date for an
   * assignment. It does not change when any existing assignment is due. It
   * should be given in 24-hour HH:MM:SS format. The default is "23:59:59".
   * Use "inherit" to inherit the account setting.
   */
  default_due_time: string;
  /**
   * Enable or disable individual learning paths for students based on
   * assessment
   *
   * Type: boolean
   */
  conditional_release: boolean | string;
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      searchParams?: Partial<updateSearchParameters>;
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      searchParams: updateSearchParameters;
      params: updateFormParameters;
      strict: true;
    }
);

/**
 * Update course settings
 *
 * Can update the following course settings:
 *
 * Nickname: update_course_settings
 */
export async function update(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/settings`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
