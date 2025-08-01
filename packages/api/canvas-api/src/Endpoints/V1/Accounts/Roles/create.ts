import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { Role } from '../../../../Resources/Roles.js';

export type createPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /** Label for the role. */
  label: string;
  /** Deprecated alias for label. */
  role: string;
  /**
   * Specifies the role type that will be used as a base for the permissions
   * granted to this role.
   *
   * Defaults to 'AccountMembership' if absent
   */
  base_role_type: string;
  /**
   * No description
   *
   * Type: boolean
   */
  'permissions[<X>][explicit]': boolean | string;
  /**
   * If explicit is 1 and enabled is 1, permission <X> will be explicitly
   * granted to this role. If explicit is 1 and enabled has any other value
   * (typically 0), permission <X> will be explicitly denied to this role. If
   * explicit is any other value (typically 0) or absent, or if enabled is
   * absent, the value for permission <X> will be inherited from upstream.
   * Ignored if permission <X> is locked upstream (in an ancestor account).
   *
   * May occur multiple times with unique values for <X>. Recognized
   * permission names for <X> are:
   *
   * [For Account-Level Roles Only] become_user -- Users - act as import_sis
   * -- SIS Data - import manage_account_memberships -- Admins - add / remove
   * manage_account_settings -- Account-level settings - manage manage_alerts
   * -- Global announcements - add / edit / delete manage_catalog -- Catalog -
   * manage Manage Course Templates granular permissions add_course_template
   * -- Course Templates - add delete_course_template -- Course Templates -
   * delete edit_course_template -- Course Templates - edit manage_courses_add
   * -- Courses - add manage_courses_admin -- Courses - manage / update
   * manage_developer_keys -- Developer keys - manage manage_feature_flags --
   * Feature Options - enable / disable manage_master_courses -- Blueprint
   * Courses - add / edit / associate / delete manage_role_overrides --
   * Permissions - manage manage_storage_quotas -- Storage Quotas - manage
   * manage_sis -- SIS data - manage Manage Temporary Enrollments granular
   * permissions temporary_enrollments_add -- Temporary Enrollments - add
   * temporary_enrollments_edit -- Temporary Enrollments - edit
   * temporary_enrollments_delete -- Temporary Enrollments - delete
   * manage_user_logins -- Users - manage login details manage_user_observers
   * -- Users - manage observers moderate_user_content -- Users - moderate
   * content read_course_content -- Course Content - view read_course_list --
   * Courses - view list view_course_changes -- Courses - view change logs
   * view_feature_flags -- Feature Options - view view_grade_changes -- Grades
   * - view change logs view_notifications -- Notifications - view
   * view_quiz_answer_audits -- Quizzes - view submission log view_statistics
   * -- Statistics - view undelete_courses -- Courses - undelete
   *
   * [For both Account-Level and Course-Level roles] Note: Applicable
   * enrollment types for course-level roles are given in brackets: S =
   * student, T = teacher (instructor), A = TA, D = designer, O = observer.
   * Lower-case letters indicate permissions that are off by default. A
   * missing letter indicates the permission cannot be enabled for the role or
   * any derived custom roles. allow_course_admin_actions -- [ Tad ] Users -
   * allow administrative actions in courses create_collaborations -- [STADo]
   * Student Collaborations - create create_conferences -- [STADo] Web
   * conferences - create create_forum -- [STADo] Discussions - create
   * generate_observer_pairing_code -- [ tado] Users - Generate observer
   * pairing codes for students import_outcomes -- [ TaDo] Learning Outcomes -
   * import manage_account_banks -- [ td ] Item Banks - manage account
   * share_banks_with_subaccounts -- [ tad ] Item Banks - share with
   * subaccounts Manage Assignments and Quizzes granular permissions
   * manage_assignments_add -- [ TADo] Assignments and Quizzes - add
   * manage_assignments_edit -- [ TADo] Assignments and Quizzes - edit /
   * manage manage_assignments_delete -- [ TADo] Assignments and Quizzes -
   * delete manage_calendar -- [sTADo] Course Calendar - add / edit / delete
   * Manage Course Content granular permissions manage_course_content_add -- [
   * TADo] Course Content - add manage_course_content_edit -- [ TADo] Course
   * Content - edit manage_course_content_delete -- [ TADo] Course Content -
   * delete manage_course_visibility -- [ TAD ] Course - change visibility
   * Manage Courses granular permissions manage_courses_conclude -- [ TaD ]
   * Courses - conclude manage_courses_delete -- [ TaD ] Courses - delete
   * manage_courses_publish -- [ TaD ] Courses - publish manage_courses_reset
   * -- [ TaD ] Courses - reset Manage Files granular permissions
   * manage_files_add -- [ TADo] Course Files - add manage_files_edit -- [
   * TADo] Course Files - edit manage_files_delete -- [ TADo] Course Files -
   * delete manage_grades -- [ TA ] Grades - edit Manage Groups granular
   * permissions manage_groups_add -- [ TAD ] Groups - add
   * manage_groups_delete -- [ TAD ] Groups - delete manage_groups_manage -- [
   * TAD ] Groups - manage manage_interaction_alerts -- [ Ta ] Alerts - add /
   * edit / delete manage_outcomes -- [sTaDo] Learning Outcomes - add / edit /
   * delete manage_proficiency_calculations -- [ t d ] Outcome Proficiency
   * Calculations - add / edit / delete manage_proficiency_scales -- [ t d ]
   * Outcome Proficiency/Mastery Scales - add / edit / delete Manage Sections
   * granular permissions manage_sections_add -- [ TaD ] Course Sections - add
   * manage_sections_edit -- [ TaD ] Course Sections - edit
   * manage_sections_delete -- [ TaD ] Course Sections - delete
   * manage_students -- [ TAD ] Users - manage students in courses
   * manage_rubrics -- [ TAD ] Rubrics - add / edit / delete Manage Pages
   * granular permissions manage_wiki_create -- [ TADo] Pages - create
   * manage_wiki_delete -- [ TADo] Pages - delete manage_wiki_update -- [
   * TADo] Pages - update moderate_forum -- [sTADo] Discussions - moderate
   * post_to_forum -- [STADo] Discussions - post read_announcements -- [STADO]
   * Announcements - view read_email_addresses -- [sTAdo] Users - view primary
   * email address read_forum -- [STADO] Discussions - view
   * read_question_banks -- [ TADo] Question banks - view and link
   * read_reports -- [ TAD ] Reports - manage read_roster -- [STADo] Users -
   * view list read_sis -- [sTa ] SIS Data - read select_final_grade -- [ TA ]
   * Grades - select final grade for moderation send_messages -- [STADo]
   * Conversations - send messages to individual course members
   * send_messages_all -- [sTADo] Conversations - send messages to entire
   * class Users - Teacher granular permissions add_teacher_to_course -- [ Tad
   * ] Add a teacher enrollment to a course remove_teacher_from_course -- [
   * Tad ] Remove a Teacher enrollment from a course Users - TA granular
   * permissions add_ta_to_course -- [ Tad ] Add a TA enrollment to a course
   * remove_ta_from_course -- [ Tad ] Remove a TA enrollment from a course
   * Users - Designer granular permissions add_designer_to_course -- [ Tad ]
   * Add a designer enrollment to a course remove_designer_from_course -- [
   * Tad ] Remove a designer enrollment from a course Users - Observer
   * granular permissions add_observer_to_course -- [ Tad ] Add an observer
   * enrollment to a course remove_observer_from_course -- [ Tad ] Remove an
   * observer enrollment from a course Users - Student granular permissions
   * add_student_to_course -- [ Tad ] Add a student enrollment to a course
   * remove_student_from_course -- [ Tad ] Remove a student enrollment from a
   * course view_all_grades -- [ TAd ] Grades - view all grades view_analytics
   * -- [sTA ] Analytics - view pages view_audit_trail -- [ t ] Grades - view
   * audit trail view_group_pages -- [sTADo] Groups - view all student groups
   * view_user_logins -- [ TA ] Users - view login IDs
   *
   * Some of these permissions are applicable only for roles on the site admin
   * account, on a root account, or for course-level roles with a particular
   * base role type; if a specified permission is inapplicable, it will be
   * ignored.
   *
   * Additional permissions may exist based on installed plugins.
   *
   * A comprehensive list of all permissions are available:
   *
   * Course Permissions PDF: http://bit.ly/cnvs-course-permissions
   *
   * Account Permissions PDF: http://bit.ly/cnvs-acct-permissions
   *
   * Type: boolean
   */
  'permissions[<X>][enabled]': boolean | string;
  /**
   * If the value is 1, permission <X> will be locked downstream (new roles in
   * subaccounts cannot override the setting). For any other value, permission
   * <X> is left unlocked. Ignored if permission <X> is already locked
   * upstream. May occur multiple times with unique values for <X>.
   *
   * Type: boolean
   */
  'permissions[<X>][locked]': boolean | string;
  /**
   * If the value is 1, permission <X> applies to the account this role is in.
   * The default value is 1. Must be true if applies_to_descendants is false.
   * This value is only returned if enabled is true.
   *
   * Type: boolean
   */
  'permissions[<X>][applies_to_self]': boolean | string;
  /**
   * If the value is 1, permission <X> cascades down to sub accounts of the
   * account this role is in. The default value is 1. Must be true if
   * applies_to_self is false.This value is only returned if enabled is true.
   *
   * Type: boolean
   */
  'permissions[<X>][applies_to_descendants]': boolean | string;
};

type Options = {
  pathParams: createPathParameters;
} & (
  | {
      searchParams?: Partial<createSearchParameters>;
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      searchParams: createSearchParameters;
      params: createFormParameters;
      strict: true;
    }
);

/**
 * Create a new role
 *
 * Create a new course-level or account-level role.
 *
 * Nickname: create_new_role
 */
export async function create(options: Options) {
  const response = await client().fetchAs<Role>(
    `/api/v1/accounts/{account_id}/roles`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
