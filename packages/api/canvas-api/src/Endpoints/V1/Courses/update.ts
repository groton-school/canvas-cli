import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../Client.js';
import { multipleBlueprintRestrictions } from '../../../Overrides.js';
import { BlueprintRestriction } from '../../../Resources/BlueprintCourses.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /**
   * The unique ID of the account to move the course to.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  'course[account_id]': number | string;
  /**
   * The name of the course. If omitted, the course will be named "Unnamed
   * Course."
   */
  'course[name]': string;
  /** The course code for the course. */
  'course[course_code]': string;
  /**
   * Course start date in ISO8601 format, e.g. 2011-01-01T01:00Z This value is
   * ignored unless 'restrict_enrollments_to_course_dates' is set to true, or
   * the course is already published.
   *
   * Format: date-time
   */
  'course[start_at]': string;
  /**
   * Course end date in ISO8601 format. e.g. 2011-01-01T01:00Z This value is
   * ignored unless 'restrict_enrollments_to_course_dates' is set to true.
   *
   * Format: date-time
   */
  'course[end_at]': string;
  /**
   * The name of the licensing. Should be one of the following abbreviations
   * (a descriptive name is included in parenthesis for reference):
   *
   * - 'private' (Private Copyrighted)
   * - 'cc_by_nc_nd' (CC Attribution Non-Commercial No Derivatives)
   * - 'cc_by_nc_sa' (CC Attribution Non-Commercial Share Alike)
   * - 'cc_by_nc' (CC Attribution Non-Commercial)
   * - 'cc_by_nd' (CC Attribution No Derivatives)
   * - 'cc_by_sa' (CC Attribution Share Alike)
   * - 'cc_by' (CC Attribution)
   * - 'public_domain' (Public Domain).
   */
  'course[license]': string;
  /**
   * Set to true if course is public to both authenticated and unauthenticated
   * users.
   *
   * Type: boolean
   */
  'course[is_public]': boolean | string;
  /**
   * Set to true if course is public only to authenticated users.
   *
   * Type: boolean
   */
  'course[is_public_to_auth_users]': boolean | string;
  /**
   * Set to true to make the course syllabus public.
   *
   * Type: boolean
   */
  'course[public_syllabus]': boolean | string;
  /**
   * Set to true to make the course syllabus to public for authenticated
   * users.
   *
   * Type: boolean
   */
  'course[public_syllabus_to_auth]': boolean | string;
  /** A publicly visible description of the course. */
  'course[public_description]': string;
  /**
   * If true, students will be able to modify the course wiki.
   *
   * Type: boolean
   */
  'course[allow_student_wiki_edits]': boolean | string;
  /**
   * If true, course members will be able to comment on wiki pages.
   *
   * Type: boolean
   */
  'course[allow_wiki_comments]': boolean | string;
  /**
   * If true, students can attach files to forum posts.
   *
   * Type: boolean
   */
  'course[allow_student_forum_attachments]': boolean | string;
  /**
   * Set to true if the course is open enrollment.
   *
   * Type: boolean
   */
  'course[open_enrollment]': boolean | string;
  /**
   * Set to true if the course is self enrollment.
   *
   * Type: boolean
   */
  'course[self_enrollment]': boolean | string;
  /**
   * Set to true to restrict user enrollments to the start and end dates of
   * the course. Setting this value to false will remove the course end date
   * (if it exists), as well as the course start date (if the course is
   * unpublished).
   *
   * Type: boolean
   */
  'course[restrict_enrollments_to_course_dates]': boolean | string;
  /**
   * The unique ID of the term to create to course in.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  'course[term_id]': number | string;
  /** The unique SIS identifier. */
  'course[sis_course_id]': string;
  /** The unique Integration identifier. */
  'course[integration_id]': string;
  /**
   * If this option is set to true, the totals in student grades summary will
   * be hidden.
   *
   * Type: boolean
   */
  'course[hide_final_grades]': boolean | string;
  /**
   * The time zone for the course. Allowed time zones are
   * {http://www.iana.org/time-zones IANA time zones} or friendlier
   * {http://api.rubyonrails.org/classes/ActiveSupport/TimeZone.html Ruby on
   * Rails time zones}.
   */
  'course[time_zone]': string;
  /**
   * Set to true to weight final grade based on assignment groups percentages.
   *
   * Type: boolean
   */
  'course[apply_assignment_group_weights]': boolean | string;
  /**
   * Set the storage quota for the course, in megabytes. The caller must have
   * the "Manage storage quotas" account permission.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  'course[storage_quota_mb]': number | string;
  /**
   * If this option is set to true, the course will be available to students
   * immediately.
   *
   * Type: boolean
   */
  offer: boolean | string;
  /**
   * The action to take on each course. 'claim' makes a course no longer
   * visible to students. This action is also called "unpublish" on the web
   * site. A course cannot be unpublished if students have received graded
   * submissions. 'offer' makes a course visible to students. This action is
   * also called "publish" on the web site. 'conclude' prevents future
   * enrollments and makes a course read-only for all participants. The course
   * still appears in prior-enrollment lists. 'delete' completely removes the
   * course from the web site (including course menus and prior-enrollment
   * lists). All enrollments are deleted. Course content may be physically
   * deleted at a future date. 'undelete' attempts to recover a course that
   * has been deleted. This action requires account administrative rights.
   * (Recovery is not guaranteed; please conclude rather than delete a course
   * if there is any possibility the course will be used again.) The recovered
   * course will be unpublished. Deleted enrollments will not be recovered.
   */
  'course[event]': string;
  /**
   * The type of page that users will see when they first visit the course
   * 'feed' Recent Activity Dashboard 'wiki' Wiki Front Page 'modules' Course
   * Modules/Sections Page 'assignments' Course Assignments List 'syllabus'
   * Course Syllabus Page other types may be added in the future
   */
  'course[default_view]': string;
  /** The syllabus body for the course */
  'course[syllabus_body]': string;
  /**
   * Optional. Indicates whether the Course Summary (consisting of the
   * course's assignments and calendar events) is displayed on the syllabus
   * page. Defaults to +true+.
   *
   * Type: boolean
   */
  'course[syllabus_course_summary]': boolean | string;
  /**
   * The grading standard id to set for the course. If no value is provided
   * for this argument the current grading_standard will be un-set from this
   * course.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  'course[grading_standard_id]': number | string;
  /**
   * Optional. The grade_passback_setting for the course. Only 'nightly_sync'
   * and '' are allowed
   */
  'course[grade_passback_setting]': string;
  /**
   * Optional. Specifies the format of the course. (Should be either
   * 'on_campus' or 'online')
   */
  'course[course_format]': string;
  /**
   * This is a file ID corresponding to an image file in the course that will
   * be used as the course image. This will clear the course's image_url
   * setting if set. If you attempt to provide image_url and image_id in a
   * request it will fail.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  'course[image_id]': number | string;
  /**
   * This is a URL to an image to be used as the course image. This will clear
   * the course's image_id setting if set. If you attempt to provide image_url
   * and image_id in a request it will fail.
   */
  'course[image_url]': string;
  /**
   * If this option is set to true, the course image url and course image ID
   * are both set to nil
   *
   * Type: boolean
   */
  'course[remove_image]': boolean | string;
  /**
   * If this option is set to true, the course banner image url and course
   * banner image ID are both set to nil
   *
   * Type: boolean
   */
  'course[remove_banner_image]': boolean | string;
  /**
   * Sets the course as a blueprint course.
   *
   * Type: boolean
   */
  'course[blueprint]': boolean | string;
  /**
   * Sets a default set to apply to blueprint course objects when restricted,
   * unless _use_blueprint_restrictions_by_object_type_ is enabled. See the
   * {api:Blueprint_Courses:BlueprintRestriction Blueprint Restriction}
   * documentation
   */
  'course[blueprint_restrictions]': BlueprintRestriction;
  /**
   * When enabled, the _blueprint_restrictions_ parameter will be ignored in
   * favor of the _blueprint_restrictions_by_object_type_ parameter
   *
   * Type: boolean
   */
  'course[use_blueprint_restrictions_by_object_type]': boolean | string;
  /**
   * Allows setting multiple {api:Blueprint_Courses:BlueprintRestriction
   * Blueprint Restriction} to apply to blueprint course objects of the
   * matching type when restricted. The possible object types are
   * "assignment", "attachment", "discussion_topic", "quiz" and "wiki_page".
   * Example usage:
   * course[blueprint_restrictions_by_object_type][assignment][content]=1
   */
  'course[blueprint_restrictions_by_object_type]': multipleBlueprintRestrictions;
  /**
   * Sets the course as a homeroom course. The setting takes effect only when
   * the course is associated with a Canvas for Elementary-enabled account.
   *
   * Type: boolean
   */
  'course[homeroom_course]': boolean | string;
  /**
   * Syncs enrollments from the homeroom that is set in homeroom_course_id.
   * The setting only takes effect when the course is associated with a Canvas
   * for Elementary-enabled account and sync_enrollments_from_homeroom is
   * enabled.
   */
  'course[sync_enrollments_from_homeroom]': string;
  /**
   * Sets the Homeroom Course id to be used with
   * sync_enrollments_from_homeroom. The setting only takes effect when the
   * course is associated with a Canvas for Elementary-enabled account and
   * sync_enrollments_from_homeroom is enabled.
   */
  'course[homeroom_course_id]': string;
  /**
   * Enable or disable the course as a template that can be selected by an
   * account
   *
   * Type: boolean
   */
  'course[template]': boolean | string;
  /**
   * Sets a color in hex code format to be associated with the course. The
   * setting takes effect only when the course is associated with a Canvas for
   * Elementary-enabled account.
   */
  'course[course_color]': string;
  /**
   * Set a friendly name for the course. If this is provided and the course is
   * associated with a Canvas for Elementary account, it will be shown instead
   * of the course name. This setting takes priority over course nicknames
   * defined by individual users.
   */
  'course[friendly_name]': string;
  /**
   * Enable or disable Course Pacing for the course. This setting only has an
   * effect when the Course Pacing feature flag is enabled for the
   * sub-account. Otherwise, Course Pacing are always disabled.
   *
   * Type: boolean
   */
  'course[enable_course_paces]': boolean | string;
  /**
   * Enable or disable individual learning paths for students based on
   * assessment
   *
   * Type: boolean
   */
  'course[conditional_release]': boolean | string;
  /**
   * When true, all grades in the course will be posted manually. When false,
   * all grades in the course will be automatically posted. Use with caution
   * as this setting will override any assignment level post policy.
   *
   * Type: boolean
   */
  'course[post_manually]': boolean | string;
  /**
   * Default is true. If false, any fields containing “sticky” changes will
   * not be updated. See SIS CSV Format documentation for information on which
   * fields can have SIS stickiness
   *
   * Type: boolean
   */
  override_sis_stickiness: boolean | string;
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
 * Update a course
 *
 * Update an existing course.
 *
 * Arguments are the same as Courses#create, with a few exceptions (enroll_me).
 *
 * If a user has content management rights, but not full course editing rights,
 * the only attribute editable through this endpoint will be "syllabus_body"
 *
 * If an account has set prevent_course_availability_editing_by_teachers, a
 * teacher cannot change +course[start_at]+, +course[conclude_at]+, or
 * +course[restrict_enrollments_to_course_dates]+ here.
 *
 * Nickname: update_course
 */
export async function update(options: Options) {
  const response = await client().fetchAs<void>(`/api/v1/courses/{id}`, {
    method: 'PUT',
    ...options
  });
  return response;
}
