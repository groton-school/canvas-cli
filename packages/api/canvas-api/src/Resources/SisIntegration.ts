import { JSONObject, JSONValue } from '@battis/typescript-tricks';

/**
 * Assignments that have post_to_sis enabled with other objects for convenience
 */
export type SisAssignment = {
  /**
   * The unique identifier for the assignment.
   *
   * type: integer
   */
  id: number | string;
  /**
   * The unique identifier for the course.
   *
   * type: integer
   */
  course_id: number | string;
  /**
   * the name of the assignment
   *
   *
   */
  name: string;
  /**
   * The time at which this assignment was originally created
   *
   * format: date-time
   */
  created_at: string;
  /**
   * the due date for the assignment. returns null if not present. NOTE: If this assignment has assignment overrides, this field will be the due date as it applies to the user requesting information from the API.
   *
   * format: date-time
   */
  due_at: string;
  /**
   * (Optional) Time at which this was/will be unlocked.
   *
   * format: date-time
   */
  unlock_at: string;
  /**
   * (Optional) Time at which this was/will be locked.
   *
   * format: date-time
   */
  lock_at: string;
  /**
   * The maximum points possible for the assignment
   *
   * type: integer
   */
  points_possible: number | string;
  /**
   * the types of submissions allowed for this assignment list containing one or more of the following: 'discussion_topic', 'online_quiz', 'on_paper', 'none', 'external_tool', 'online_text_entry', 'online_url', 'online_upload', 'media_recording', 'student_annotation'
   *
   *
   */
  submission_types: string[];
  /**
   * Third Party integration id for assignment
   *
   *
   */
  integration_id: string;
  /**
   * (optional, Third Party integration data for assignment)
   *
   *
   */
  integration_data: string;
  /**
   * If false, the assignment will be omitted from the student's final grade
   *
   * type: boolean
   */
  include_in_final_grade: boolean | string;
  /**
   * Includes attributes of a assignment_group for convenience. For more details see Assignments API.
   *
   *
   */
  assignment_group: AssignmentGroupAttributes[];
  /**
   * Includes attributes of a section for convenience. For more details see Sections API.
   *
   *
   */
  sections: SectionAttributes[];
  /**
   * Includes attributes of a user assignment overrides. For more details see Assignments API.
   *
   *
   */
  user_overrides: UserAssignmentOverrideAttributes[];
};

/**
 * Some of the attributes of an Assignment Group. See Assignments API for more details
 */
export type AssignmentGroupAttributes = {
  /**
   * the id of the Assignment Group
   *
   * type: integer
   */
  id: number | string;
  /**
   * the name of the Assignment Group
   *
   *
   */
  name: string;
  /**
   * the weight of the Assignment Group
   *
   * type: integer
   */
  group_weight: number | string;
  /**
   * the sis source id of the Assignment Group
   *
   *
   */
  sis_source_id: string;
  /**
   * the integration data of the Assignment Group
   *
   * object
   */
  integration_data: JSONObject;
};

/**
 * Some of the attributes of a section. For more details see Sections API.
 */
export type SectionAttributes = {
  /**
   * The unique identifier for the section.
   *
   * type: integer
   */
  id: number | string;
  /**
   * The name of the section.
   *
   *
   */
  name: string;
  /**
   * The sis id of the section.
   *
   *
   */
  sis_id: string;
  /**
   * Optional: The integration ID of the section.
   *
   *
   */
  integration_id: string;
  /**
   * The course to which the section belongs or the course from which the section was cross-listed
   *
   *
   */
  origin_course: CourseAttributes;
  /**
   * Optional: Attributes of the xlist course. Only present when the section has been cross-listed. See Courses API for more details
   *
   *
   */
  xlist_course: CourseAttributes;
  /**
   * Optional: Attributes of the assignment override that apply to the section. See Assignment API for more details
   *
   *
   */
  override: SectionAssignmentOverrideAttributes;
};

/**
 * Attributes of a course object.  See Courses API for more details
 */
export type CourseAttributes = {
  /**
   * The unique Canvas identifier for the origin course
   *
   * type: integer
   */
  id: number | string;
  /**
   * The name of the origin course.
   *
   *
   */
  name: string;
  /**
   * The sis id of the origin_course.
   *
   *
   */
  sis_id: string;
  /**
   * The integration ID of the origin_course.
   *
   *
   */
  integration_id: string;
};

/**
 * Attributes of an assignment override that apply to the section object.  See Assignments API for more details
 */
export type SectionAssignmentOverrideAttributes = {
  /**
   * The title for the assignment override
   *
   *
   */
  override_title: string;
  /**
   * the due date for the assignment. returns null if not present. NOTE: If this assignment has assignment overrides, this field will be the due date as it applies to the user requesting information from the API.
   *
   * format: date-time
   */
  due_at: string;
  /**
   * (Optional) Time at which this was/will be unlocked.
   *
   * format: date-time
   */
  unlock_at: string;
  /**
   * (Optional) Time at which this was/will be locked.
   *
   * format: date-time
   */
  lock_at: string;
};

/**
 * Attributes of assignment overrides that apply to users.  See Assignments API for more details
 */
export type UserAssignmentOverrideAttributes = {
  /**
   * The unique Canvas identifier for the assignment override
   *
   * type: integer
   */
  id: number | string;
  /**
   * The title of the assignment override.
   *
   *
   */
  title: string;
  /**
   * The time at which this assignment is due
   *
   * format: date-time
   */
  due_at: string;
  /**
   * (Optional) Time at which this was/will be unlocked.
   *
   * format: date-time
   */
  unlock_at: string;
  /**
   * (Optional) Time at which this was/will be locked.
   *
   * format: date-time
   */
  lock_at: string;
  /**
   * Includes attributes of a student for convenience. For more details see Users API.
   *
   *
   */
  students: StudentAttributes[];
};

/**
 * Attributes of student.  See Users API for more details
 */
export type StudentAttributes = {
  /**
   * The unique Canvas identifier for the user
   *
   * type: integer
   */
  user_id: number | string;
  /**
   * The SIS ID associated with the user.  This field is only included if the user came from a SIS import and has permissions to view SIS information.
   *
   *
   */
  sis_user_id: string;
};
