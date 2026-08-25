import { JSONObject, JSONValue } from '@battis/typescript-tricks';
import { LockInfo } from './Assignments.js';

/**
 *
 */
export type Module = {
  /**
   * the unique identifier for the module
   *
   * type: integer
   */
  id: number | string;
  /**
   * the state of the module: 'active', 'deleted'
   *
   *
   */
  workflow_state: string;
  /**
   * the position of this module in the course (1-based)
   *
   * type: integer
   */
  position: number | string;
  /**
   * the name of this module
   *
   *
   */
  name: string;
  /**
   * (Optional) the date this module will unlock
   *
   * format: date-time
   */
  unlock_at: string;
  /**
   * Whether module items must be unlocked in order
   *
   * type: boolean
   */
  require_sequential_progress: boolean | string;
  /**
   * Whether module requires all required items or one required item to be considered complete (one of 'all' or 'one')
   *
   *
   */
  requirement_type: string;
  /**
   * IDs of Modules that must be completed before this one is unlocked
   *
   *
   */
  prerequisite_module_ids: number | string[];
  /**
   * The number of items in the module
   *
   * type: integer
   */
  items_count: number | string;
  /**
   * The API URL to retrive this module's items
   *
   *
   */
  items_url: string;
  /**
   * The contents of this module, as an array of Module Items. (Present only if requested via include[]=items AND the module is not deemed too large by Canvas.)
   *
   *
   */
  items: ModuleItem[];
  /**
   * The state of this Module for the calling user one of 'locked', 'unlocked', 'started', 'completed' (Optional; present only if the caller is a student or if the optional parameter 'student_id' is included)
   *
   *
   */
  state: string;
  /**
   * the date the calling user completed the module (Optional; present only if the caller is a student or if the optional parameter 'student_id' is included)
   *
   * format: date-time
   */
  completed_at: string;
  /**
   * if the student's final grade for the course should be published to the SIS upon completion of this module
   *
   * type: boolean
   */
  publish_final_grade: boolean | string;
  /**
   * (Optional) Whether this module is published. This field is present only if the caller has permission to view unpublished modules.
   *
   * type: boolean
   */
  published: boolean | string;
};

/**
 *
 */
export type CompletionRequirement = {
  /**
   * one of 'must_view', 'must_submit', 'must_contribute', 'min_score', 'min_percentage', 'must_mark_done'
   *
   *
   */
  type: string;
  /**
   * minimum score required to complete (only present when type == 'min_score')
   *
   * type: integer
   */
  min_score: number | string;
  /**
   * minimum percentage required to complete (only present when type == 'min_percentage')
   *
   * type: integer
   */
  min_percentage: number | string;
  /**
   * whether the calling user has met this requirement (Optional; present only if the caller is a student or if the optional parameter 'student_id' is included)
   *
   * type: boolean
   */
  completed: boolean | string;
};

/**
 *
 */
export type ContentDetails = {
  /**
   *
   *
   * type: integer
   */
  points_possible: number | string;
  /**
   *
   *
   * format: date-time
   */
  due_at: string;
  /**
   *
   *
   * format: date-time
   */
  unlock_at: string;
  /**
   *
   *
   * format: date-time
   */
  lock_at: string;
  /**
   *
   *
   * type: boolean
   */
  locked_for_user: boolean | string;
  /**
   *
   *
   *
   */
  lock_explanation: string;
  /**
   *
   *
   *
   */
  lock_info: LockInfo;
};

/**
 *
 */
export type ModuleItem = {
  /**
   * the unique identifier for the module item
   *
   * type: integer
   */
  id: number | string;
  /**
   * the id of the Module this item appears in
   *
   * type: integer
   */
  module_id: number | string;
  /**
   * the position of this item in the module (1-based)
   *
   * type: integer
   */
  position: number | string;
  /**
   * the title of this item
   *
   *
   */
  title: string;
  /**
   * 0-based indent level; module items may be indented to show a hierarchy
   *
   * type: integer
   */
  indent: number | string;
  /**
   * the type of object referred to one of 'File', 'Page', 'Discussion', 'Assignment', 'Quiz', 'SubHeader', 'ExternalUrl', 'ExternalTool'
   *
   *
   */
  type: string;
  /**
   * the id of the object referred to applies to 'File', 'Discussion', 'Assignment', 'Quiz', 'ExternalTool' types
   *
   * type: integer
   */
  content_id: number | string;
  /**
   * link to the item in Canvas
   *
   *
   */
  html_url: string;
  /**
   * (Optional) link to the Canvas API object, if applicable
   *
   *
   */
  url: string;
  /**
   * (only for 'Page' type) unique locator for the linked wiki page
   *
   *
   */
  page_url: string;
  /**
   * (only for 'ExternalUrl' and 'ExternalTool' types) external url that the item points to
   *
   *
   */
  external_url: string;
  /**
   * (only for 'ExternalTool' type) whether the external tool opens in a new tab
   *
   * type: boolean
   */
  new_tab: boolean | string;
  /**
   * Completion requirement for this module item
   *
   *
   */
  completion_requirement: CompletionRequirement;
  /**
   * (Present only if requested through include[]=content_details) If applicable, returns additional details specific to the associated object
   *
   *
   */
  content_details: ContentDetails;
  /**
   * (Optional) Whether this module item is published. This field is present only if the caller has permission to view unpublished items.
   *
   * type: boolean
   */
  published: boolean | string;
};

/**
 *
 */
export type ModuleItemSequenceNode = {
  /**
   * The previous ModuleItem in the sequence
   *
   *
   */
  prev: ModuleItem;
  /**
   * The ModuleItem being queried
   *
   *
   */
  current: ModuleItem;
  /**
   * The next ModuleItem in the sequence
   *
   *
   */
  next: ModuleItem;
  /**
   * The conditional release rule for the module item, if applicable
   *
   * object
   */
  mastery_path: JSONObject;
};

/**
 *
 */
export type ModuleItemSequence = {
  /**
   * an array containing one ModuleItemSequenceNode for each appearence of the asset in the module sequence (up to 10 total)
   *
   *
   */
  items: ModuleItemSequenceNode[];
  /**
   * an array containing each Module referenced above
   *
   *
   */
  modules: Module[];
};

/**
 *
 */
export type ModuleAssignmentOverride = {
  /**
   * the ID of the assignment override
   *
   * type: integer
   */
  id: number | string;
  /**
   * the ID of the module the override applies to
   *
   * type: integer
   */
  context_module_id: number | string;
  /**
   * the title of the override
   *
   *
   */
  title: string;
  /**
   * an array of the override's target students (present only if the override targets an adhoc set of students)
   *
   *
   */
  students: OverrideTarget;
  /**
   * the override's target section (present only if the override targets a section)
   *
   *
   */
  course_section: OverrideTarget;
};

/**
 *
 */
export type OverrideTarget = {
  /**
   * the ID of the user or section that the override is targeting
   *
   * type: integer
   */
  id: number | string;
  /**
   * the name of the user or section that the override is targeting
   *
   *
   */
  name: string;
};
