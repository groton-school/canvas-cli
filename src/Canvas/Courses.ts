import {
  DateTimeString,
  HTMLString,
  URLString,
  UUIDString
} from '@battis/descriptive-types';
import { Colors } from '@battis/qui-cli.colors';
import { Log } from '@battis/qui-cli.log';
import ora from 'ora';
import { canvas, stringify } from './Client.js';
import { isError } from './Error.js';
import { url } from './URL.js';

type Term = {
  id: number;
  name: string;
  start_at: DateTimeString;
  end_at: DateTimeString | null;
};

type CourseProgress = {
  /** total number of requirements from all modules */
  requirement_count: number;
  /** total number of requirements the user has completed from all modules */
  requirement_completed_count: number;
  /** url to next module item that has an unmet requirement. null if the user has
   * completed the course or the current module does not require sequential
   * progress */
  next_requirement_url: URLString;
  /** date the course was completed. null if the course has not been completed by
   * this user */
  completed_at: DateTimeString;
};

type CalendarLink = {
  /** The URL of the calendar in ICS format */
  ics: URLString;
};

export type Model = {
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
  calendar: CalendarLink;
  /**  the type of page that users will see when they first visit the course -
   *  'feed': Recent Activity Dashboard - 'wiki': Wiki Front Page - 'modules':
   *  Course Modules/Sections Page - 'assignments': Course Assignments List -
   *  'syllabus': Course Syllabus Page other types may be added in the future  */
  default_view: 'feed' | 'wiki' | 'assignments' | 'syllabus';
  /**  optional: user-generated HTML for the course syllabus  */
  syllabus_body?: HTMLString;
  /**  optional: the number of submissions needing grading returned only if the
   *  current user has grading rights and include[]=needs_grading_count  */
  needs_grading_count?: 17;
  /**  optional: the enrollment term object for the course returned only if
   *  include[]=term  */
  term?: Term;
  /**  optional: information on progress through the course returned only if
   *  include[]=course_progress  */
  course_progress?: CourseProgress;
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

type GetOptions = { id: number } | { sis_course_id: string };

export async function get(identifier: GetOptions) {
  const result = (await canvas().fetch(
    `/api/v1/courses/${'id' in identifier ? identifier.id : `sis_course_id:${identifier.sis_course_id}`}`
  )) as Model;
  if (isError(result)) {
    return undefined;
  }
  return result;
}

export type Parameters = {
  /** The name of the course. If omitted, the course will be named “Unnamed Course.” */
  'course[name]'?: string;
  /** The course code for the course. */
  'course[course_code]'?: string;
  /** Course start date in ISO8601 format, e.g. 2011-01-01T01:00Z This value is ignored unless ‘restrict_enrollments_to_course_dates’ is set to true. */
  'course[start_at]'?: DateTimeString;
  /** Course end date in ISO8601 format. e.g. 2011-01-01T01:00Z This value is ignored unless ‘restrict_enrollments_to_course_dates’ is set to true. */
  'course[end_at]'?: DateTimeString;
  /** The name of the licensing. Should be one of the following abbreviations (a descriptive name is included in parenthesis for reference):

    ‘private’ (Private Copyrighted)

    ‘cc_by_nc_nd’ (CC Attribution Non-Commercial No Derivatives)

    ‘cc_by_nc_sa’ (CC Attribution Non-Commercial Share Alike)

    ‘cc_by_nc’ (CC Attribution Non-Commercial)

    ‘cc_by_nd’ (CC Attribution No Derivatives)

    ‘cc_by_sa’ (CC Attribution Share Alike)

    ‘cc_by’ (CC Attribution)

    ‘public_domain’ (Public Domain). */
  'course[license]'?:
    | 'private'
    | 'cc_by_nc_nd'
    | 'cc_by_nc_sa'
    | 'cc_by_nc'
    | 'cc_by_nd'
    | 'cc_by_sa'
    | 'cc_by'
    | 'public_domain';
  /** Set to true if course is public to both authenticated and unauthenticated users. */
  'course[is_public]'?: boolean;
  /** Set to true if course is public only to authenticated users. */
  'course[is_public_to_auth_users]'?: boolean;
  /** Set to true to make the course syllabus public. */
  'course[public_syllabus]'?: boolean;
  /** Set to true to make the course syllabus public for authenticated users. */
  'course[public_syllabus_to_auth]'?: boolean;
  /** A publicly visible description of the course. */
  'course[public_description]'?: string;
  /** If true, students will be able to modify the course wiki. */
  'course[allow_student_wiki_edits]'?: boolean;
  /** If true, course members will be able to comment on wiki pages. */
  'course[allow_wiki_comments]'?: boolean;
  /** If true, students can attach files to forum posts. */
  'course[allow_student_forum_attachments]'?: boolean;
  /** Set to true if the course is open enrollment. */
  'course[open_enrollment]'?: boolean;
  /** Set to true if the course is self enrollment. */
  'course[self_enrollment]'?: boolean;
  /** Set to true to restrict user enrollments to the start and end dates of the course. This value must be set to true in order to specify a course start date and/or end date. */
  'course[restrict_enrollments_to_course_dates]'?: boolean;
  /** The unique ID of the term to create to course in. */
  'course[term_id]'?: string;
  /** The unique SIS identifier. */
  'course[sis_course_id]'?: string;
  /** The unique Integration identifier. */
  'course[integration_id]'?: string;
  /** If this option is set to true, the totals in student grades summary will be hidden. */
  'course[hide_final_grades]'?: boolean;
  /** Set to true to weight final grade based on assignment groups percentages. */
  'course[apply_assignment_group_weights]'?: boolean;
  /** The time zone for the course. Allowed time zones are IANA time zones or friendlier Ruby on Rails time zones. */
  'course[time_zone]'?: string;
  /** If this option is set to true, the course will be available to students immediately. */
  offer?: boolean;
  /** Set to true to enroll the current user as the teacher. */
  enroll_me?: boolean;
  /** The type of page that users will see when they first visit the course

    ‘feed’ Recent Activity Dashboard

    ‘modules’ Course Modules/Sections Page

    ‘assignments’ Course Assignments List

    ‘syllabus’ Course Syllabus Page

    other types may be added in the future

    Allowed values:
    feed, wiki, modules, syllabus, assignments */
  'course[default_view]'?: string;
  /** The syllabus body for the course */
  'course[syllabus_body]'?: string;
  /** The grading standard id to set for the course. If no value is provided for this argument the current grading_standard will be un-set from this course. */
  'course[grading_standard_id]'?: number;
  /** Optional. The grade_passback_setting for the course. Only ‘nightly_sync’, ‘disabled’, and ” are allowed */
  'course[grade_passback_setting]'?: string;
  /** Optional. Specifies the format of the course. (Should be ‘on_campus’, ‘online’, or ‘blended’) */
  'course[course_format]'?: string;
  /** Default is false. When true, all grades in the course must be posted manually, and will not be automatically posted. When false, all grades in the course will be automatically posted. */
  'course[post_manually]'?: boolean;
  /** When true, will first try to re-activate a deleted course with matching sis_course_id if possible. */
  enable_sis_reactivation?: boolean;
};

type CreateOptions = {
  args: Parameters;
  account_id: number;
};

export async function create({ args, account_id }: CreateOptions) {
  const spinner = ora(
    `Creating course ${Colors.value(args['course[name]'])}`
  ).start();

  const result = (await canvas().fetch(
    `/api/v1/accounts/${account_id}/courses`,
    { method: 'POST', body: new URLSearchParams(stringify(args)) }
  )) as Model;
  if (isError(result)) {
    spinner.fail(`Error creating ${Colors.value(args['course[name]'])}`);
    throw new Error(
      `Error creating course: ${Log.syntaxColor({
        account_id,
        args: stringify(args),
        error: result
      })}`
    );
  }
  spinner.succeed(
    `Created course ${Colors.value(result.name)} at ${Colors.url(url(`/courses/${result.id}`))}`
  );
  return result;
}

export async function reset(course: Model) {
  const spinner = ora(`Resetting course ${Colors.value(course.name)}`).start();
  const result = (await canvas().fetch(
    `/api/v1/courses/${course.id}/reset_content`,
    { method: 'POST' }
  )) as Model;
  if (isError(result)) {
    spinner.fail(`Error resetting ${Colors.value(course.name)}`);
    throw new Error(
      `Error resetting course: ${Log.syntaxColor({
        ...basic(course),
        error: result
      })}`
    );
  }
  spinner.succeed(
    `Reset course ${Colors.value(result.name)} at ${Colors.url(url(`/courses/${result.id}`))}`
  );
  return result;
}

export function basic(course: Model) {
  return {
    id: course.id,
    name: course.name,
    url: url(`/courses/${course.id}`)
  };
}

type UpdateOptions = {
  course: Model;
  args: Partial<Parameters>;
};

export async function update({ course, args }: UpdateOptions) {
  const spinner = ora(`Resetting course ${Colors.value(course.name)}`).start();
  const result = (await canvas().fetch(`/api/v1/courses/${course.id}`, {
    method: 'PUT',
    body: new URLSearchParams(stringify(args))
  })) as Model;
  if (isError(result)) {
    spinner.fail(`Error updating course ${Colors.value(course.name)}`);
    throw new Error(
      `Error updating course: ${Log.syntaxColor({
        ...basic(course),
        args: stringify(args),
        error: result
      })}`
    );
  }
  spinner.succeed(
    `Updated course ${Colors.value(result.name)} at ${Colors.url(url(`/courses/${result.id}`))}`
  );
  return result;
}
