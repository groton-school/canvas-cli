import { JSONObject, JSONValue } from '@battis/typescript-tricks';
import { LockInfo } from './Assignments.js';

export type Module = {
  /**
   * The unique identifier for the module
   *
   * Type: integer
   */
  id: number | string;
  /** The state of the module: 'active', 'deleted' */
  workflow_state: string;
  /**
   * The position of this module in the course (1-based)
   *
   * Type: integer
   */
  position: number | string;
  /** The name of this module */
  name: string;
  /**
   * (Optional) the date this module will unlock
   *
   * Format: date-time
   */
  unlock_at: string;
  /**
   * Whether module items must be unlocked in order
   *
   * Type: boolean
   */
  require_sequential_progress: boolean | string;
  /**
   * Whether module requires all required items or one required item to be
   * considered complete (one of 'all' or 'one')
   */
  requirement_type: string;
  /** IDs of Modules that must be completed before this one is unlocked */
  prerequisite_module_ids: number | string[];
  /**
   * The number of items in the module
   *
   * Type: integer
   */
  items_count: number | string;
  /** The API URL to retrive this module's items */
  items_url: string;
  /**
   * The contents of this module, as an array of Module Items. (Present only if
   * requested via include[]=items AND the module is not deemed too large by
   * Canvas.)
   */
  items: ModuleItem[];
  /**
   * The state of this Module for the calling user one of 'locked', 'unlocked',
   * 'started', 'completed' (Optional; present only if the caller is a student
   * or if the optional parameter 'student_id' is included)
   */
  state: string;
  /**
   * The date the calling user completed the module (Optional; present only if
   * the caller is a student or if the optional parameter 'student_id' is
   * included)
   *
   * Format: date-time
   */
  completed_at: string;
  /**
   * If the student's final grade for the course should be published to the SIS
   * upon completion of this module
   *
   * Type: boolean
   */
  publish_final_grade: boolean | string;
  /**
   * (Optional) Whether this module is published. This field is present only if
   * the caller has permission to view unpublished modules.
   *
   * Type: boolean
   */
  published: boolean | string;
};

export type CompletionRequirement = {
  /**
   * One of 'must_view', 'must_submit', 'must_contribute', 'min_score',
   * 'min_percentage', 'must_mark_done'
   */
  type: string;
  /**
   * Minimum score required to complete (only present when type == 'min_score')
   *
   * Type: integer
   */
  min_score: number | string;
  /**
   * Minimum percentage required to complete (only present when type ==
   * 'min_percentage')
   *
   * Type: integer
   */
  min_percentage: number | string;
  /**
   * Whether the calling user has met this requirement (Optional; present only
   * if the caller is a student or if the optional parameter 'student_id' is
   * included)
   *
   * Type: boolean
   */
  completed: boolean | string;
};

export type ContentDetails = {
  /** Type: integer */
  points_possible: number | string;
  /** Format: date-time */
  due_at: string;
  /** Format: date-time */
  unlock_at: string;
  /** Format: date-time */
  lock_at: string;
  /** Type: boolean */
  locked_for_user: boolean | string;
  lock_explanation: string;
  lock_info: LockInfo;
};

export type ModuleItem = {
  /**
   * The unique identifier for the module item
   *
   * Type: integer
   */
  id: number | string;
  /**
   * The id of the Module this item appears in
   *
   * Type: integer
   */
  module_id: number | string;
  /**
   * The position of this item in the module (1-based)
   *
   * Type: integer
   */
  position: number | string;
  /** The title of this item */
  title: string;
  /**
   * 0-based indent level; module items may be indented to show a hierarchy
   *
   * Type: integer
   */
  indent: number | string;
  /**
   * The type of object referred to one of 'File', 'Page', 'Discussion',
   * 'Assignment', 'Quiz', 'SubHeader', 'ExternalUrl', 'ExternalTool'
   */
  type: string;
  /**
   * The id of the object referred to applies to 'File', 'Discussion',
   * 'Assignment', 'Quiz', 'ExternalTool' types
   *
   * Type: integer
   */
  content_id: number | string;
  /** Link to the item in Canvas */
  html_url: string;
  /** (Optional) link to the Canvas API object, if applicable */
  url: string;
  /** (only for 'Page' type) unique locator for the linked wiki page */
  page_url: string;
  /**
   * (only for 'ExternalUrl' and 'ExternalTool' types) external url that the
   * item points to
   */
  external_url: string;
  /**
   * (only for 'ExternalTool' type) whether the external tool opens in a new tab
   *
   * Type: boolean
   */
  new_tab: boolean | string;
  /** Completion requirement for this module item */
  completion_requirement: CompletionRequirement;
  /**
   * (Present only if requested through include[]=content_details) If
   * applicable, returns additional details specific to the associated object
   */
  content_details: ContentDetails;
  /**
   * (Optional) Whether this module item is published. This field is present
   * only if the caller has permission to view unpublished items.
   *
   * Type: boolean
   */
  published: boolean | string;
};

export type ModuleItemSequenceNode = {
  /** The previous ModuleItem in the sequence */
  prev: ModuleItem;
  /** The ModuleItem being queried */
  current: ModuleItem;
  /** The next ModuleItem in the sequence */
  next: ModuleItem;
  /**
   * The conditional release rule for the module item, if applicable
   *
   * Object
   */
  mastery_path: JSONObject;
};

export type ModuleItemSequence = {
  /**
   * An array containing one ModuleItemSequenceNode for each appearence of the
   * asset in the module sequence (up to 10 total)
   */
  items: ModuleItemSequenceNode[];
  /** An array containing each Module referenced above */
  modules: Module[];
};

export type ModuleAssignmentOverride = {
  /**
   * The ID of the assignment override
   *
   * Type: integer
   */
  id: number | string;
  /**
   * The ID of the module the override applies to
   *
   * Type: integer
   */
  context_module_id: number | string;
  /** The title of the override */
  title: string;
  /**
   * An array of the override's target students (present only if the override
   * targets an adhoc set of students)
   */
  students: OverrideTarget;
  /**
   * The override's target section (present only if the override targets a
   * section)
   */
  course_section: OverrideTarget;
};

export type OverrideTarget = {
  /**
   * The ID of the user or section that the override is targeting
   *
   * Type: integer
   */
  id: number | string;
  /** The name of the user or section that the override is targeting */
  name: string;
};
