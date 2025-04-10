import { client } from '../../../../Client.js';

export type updatePathParameters = {
  /** ID */
  course_id: string;
};

export type updateFormParameters = {
  /**
   * Let student final grades for a grading period or the total grades for the
   * course be overridden
   */
  allow_final_grade_override: boolean;
  /** Let students create discussion topics */
  allow_student_discussion_topics: boolean;
  /** Let students attach files to discussions */
  allow_student_forum_attachments: boolean;
  /** Let students edit or delete their own discussion replies */
  allow_student_discussion_editing: boolean;
  /** Let students organize their own groups */
  allow_student_organized_groups: boolean;
  /** Let students report offensive discussion content */
  allow_student_discussion_reporting: boolean;
  /** Let students create anonymous discussion topics */
  allow_student_anonymous_discussion_topics: boolean;
  /** Filter SpeedGrader to only the selected student group */
  filter_speed_grader_by_student_group: boolean;
  /** Hide totals in student grades summary */
  hide_final_grades: boolean;
  /** Hide grade distribution graphs from students */
  hide_distribution_graphs: boolean;
  /** Disallow students from viewing students in sections they do not belong to */
  hide_sections_on_course_users_page: boolean;
  /** Disable comments on announcements */
  lock_all_announcements: boolean;
  /**
   * Copyright and license information must be provided for files before they
   * are published.
   */
  usage_rights_required: boolean;
  /** Restrict students from viewing courses after end date */
  restrict_student_past_view: boolean;
  /** Restrict students from viewing courses before start date */
  restrict_student_future_view: boolean;
  /**
   * Show the most recent announcements on the Course home page (if a Wiki,
   * defaults to five announcements, configurable via
   * home_page_announcement_limit). Canvas for Elementary subjects ignore this
   * setting.
   */
  show_announcements_on_home_page: boolean;
  /**
   * Limit the number of announcements on the home page if enabled via
   * show_announcements_on_home_page
   *
   * Format: 'int64'
   */
  home_page_announcement_limit: number;
  /**
   * Show the course summary (list of assignments and calendar events) on the
   * syllabus page. Default is true.
   */
  syllabus_course_summary: boolean;
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
   */
  conditional_release: boolean;
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      params?: updateFormParameters;
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
export async function update({ pathParams, params }: Options) {
  return await client().fetchAs<void>(`/v1/courses/{course_id}/settings`, {
    method: 'PUT',
    pathParams,
    params
  });
}
