import {
  DateTimeString,
  HTMLString,
  UUIDString
} from '@battis/descriptive-types';
import { Colors } from '@battis/qui-cli.colors';
import { Log } from '@battis/qui-cli.log';
import { OAuth2 } from '@oauth2-cli/qui-cli-plugin';
import ora from 'ora';
import * as Debug from '../Debug.js';
import { OneRoster } from '../OneRoster.js';
import { isError } from './Error.js';
import * as Canvas from './URL.js';

export type Course = {
  /** the unique identifier for the course */
  id: number;
  /** the SIS identifier for the course, if defined. This field is only included if
   * the user has permission to view SIS information. */
  sis_course_id: string | null;
  /**  the UUID of the course  */
  uuid: UUIDString;
  /**  the integration identifier for the course, if defined. This field is only
  /**  included if the user has permission to view SIS information.  */
  integration_id: string | null;
  /**  the unique identifier for the SIS import. This field is only included if the
   *  user has permission to manage SIS information.  */
  sis_import_id: number;
  /**  the full name of the course. If the requesting user has set a nickname for
   *  the course, the nickname will be shown here.  */
  name: string;
  /**  the course code  */
  course_code: string;
  /**  the actual course name. This field is returned only if the requesting user
   *  has set a nickname for the course.  */
  original_name: string;
  /**  the current state of the course, also known as ‘status’.  The value will be
   *  one of the following values: 'unpublished', 'available', 'completed', or
   *  'deleted'.  NOTE: When fetching a singular course that has a 'deleted'
   *  workflow state value, an error will be returned with a message of 'The
   *  specified resource does not exist.'  */
  workflow_state: 'unpublished' | 'available' | 'completed' | 'deleted';
  /**  the account associated with the course  */
  account_id: number;
  /**  the root account associated with the course  */
  root_account_id: number;
  /**  the enrollment term associated with the course  */
  enrollment_term_id: number;
  /**  A list of grading periods associated with the course  */
  grading_periods: null;
  /**  the grading standard associated with the course  */
  grading_standard_id: number;
  /**  the grade_passback_setting set on the course  */
  grade_passback_setting: string;
  /**  the date the course was created.  */
  created_at: DateTimeString;
  /**  the start date for the course, if applicable  */
  start_at: DateTimeString;
  /**  the end date for the course, if applicable  */
  end_at: DateTimeString;
  /**  the course-set locale, if applicable  */
  locale: string;
  /**  A list of enrollments linking the current user to the course. for student
   *  enrollments, grading information may be included if include[]=total_scores  */
  enrollments: any;
  /**  optional: the total number of active and invited students in the course  */
  total_students: number;
  /**  course calendar  */
  calendar: any;
  /**  the type of page that users will see when they first visit the course -
   *  'feed': Recent Activity Dashboard - 'wiki': Wiki Front Page - 'modules':
   *  Course Modules/Sections Page - 'assignments': Course Assignments List -
   *  'syllabus': Course Syllabus Page other types may be added in the future  */
  default_view: 'feed' | 'wiki' | 'assignments' | 'syllabus';
  /**  optional: user-generated HTML for the course syllabus  */
  syllabus_body: HTMLString;
  /**  optional: the number of submissions needing grading returned only if the
   *  current user has grading rights and include[]=needs_grading_count  */
  needs_grading_count: 17;
  /**  optional: the enrollment term object for the course returned only if
   *  include[]=term  */
  term: any;
  /**  optional: information on progress through the course returned only if
   *  include[]=course_progress  */
  course_progress?: any;
  /**  weight final grade based on assignment group percentages  */
  apply_assignment_group_weights: boolean;
  /**  optional: the permissions the user has for the course. returned only for a
   *  single course and include[]=permissions  */
  permissions?: {
    create_discussion_topic: boolean;
    create_announcement: boolean;
  };
  is_public: boolean;
  is_public_to_auth_users: boolean;
  public_syllabus: boolean;
  public_syllabus_to_auth: boolean;
  /**  optional: the public description of the course  */
  public_description?: string;
  storage_quota_mb: number;
  storage_quota_used_mb: number;
  hide_final_grades: boolean;
  license: string;
  allow_student_assignment_edits: boolean;
  allow_wiki_comments: boolean;
  allow_student_forum_attachments: boolean;
  open_enrollment: boolean;
  self_enrollment: boolean;
  restrict_enrollments_to_course_dates: boolean;
  course_format: string;
  /**  optional: this will be true if this user is currently prevented from viewing
   *  the course because of date restriction settings  */
  access_restricted_by_date?: boolean;
  /**  The course's IANA time zone name.  */
  time_zone: string;
  /**  optional: whether the course is set as a Blueprint Course (blueprint fields
   *  require the Blueprint Courses feature)  */
  blueprint?: boolean;
  /**  optional: Set of restrictions applied to all locked course objects  */
  blueprint_restrictions?: {
    content: boolean;
    points: boolean;
    due_dates: boolean;
    availability_dates: boolean;
  };
  /**  optional: Sets of restrictions differentiated by object type applied to
   *  locked course objects  */
  blueprint_restrictions_by_object_type?: {
    assignment: { content: boolean; points: boolean };
    wiki_page: { content: boolean };
  };
  /**  optional: whether the course is set as a template (requires the Course
   *  Templates feature)  */
  template?: boolean;
};

export async function get(section: OneRoster) {
  const result = await OAuth2.request(
    Canvas.url(`/api/v1/courses/sis_course_id:${section.sis_course_id}`)
  );
  if (result.status === 404) {
    return undefined;
  }
  const json = await result.json();
  if (isError(json)) {
    throw new Error(
      `Error getting course: ${Log.syntaxColor({
        sis_course_id: section.sis_course_id,
        error: json
      })}`
    );
  }
  return json as Course;
}

export async function create(section: OneRoster) {
  const spinner = ora(`Creating ${Colors.value(section.name)}`).start();
  const body = new URLSearchParams({
    'course[name]': section.name,
    'course[term_id]': `sis_term)id:${section.sis_term_id}`,
    'course[sis_course_id]': section.sis_course_id,
    'course[syllabus_body]': section.snapshot.SectionInfo?.Description || '',
    enable_sis_reactivation: 'true'
  });

  const result = (await OAuth2.requestJSON(
    Canvas.url(`/api/v1/accounts/${section.account_id}/courses`),
    'POST',
    body
  )) as Course;
  if (isError(result)) {
    spinner.fail(`Error creating ${Colors.value(section.name)}`);
    throw new Error(
      `Error creating course: ${Log.syntaxColor({
        account_id: section.account_id,
        course: body.entries(),
        error: result
      })}`
    );
  }
  spinner.succeed(`Created ${Colors.value(section.name)}`);
  return result as Course;
}

export async function reset(course: Course) {
  const spinner = ora(`Resetting ${Colors.value(course.name)}`).start();
  const result = await OAuth2.requestJSON(
    Canvas.url(`/api/v1/courses/${course.id}/reset_content`),
    'POST'
  );
  if (isError(result)) {
    spinner.fail(`Error resetting ${Colors.value(course.name)}`);
    throw new Error(
      `Error resetting course: ${Log.syntaxColor({
        ...Debug.course(course),
        error: result
      })}`
    );
  }
  spinner.succeed(`Reset ${Colors.value(course.name)}`);
  return result as Course;
}
