import { JSONObject } from '@battis/typescript-tricks';

export type CoursePace = {
  /**
   * The ID of the course pace
   *
   * Type: integer
   */
  id: number | string;
  /**
   * The ID of the course
   *
   * Type: integer
   */
  course_id: number | string;
  /**
   * The ID of the user for this course pace
   *
   * Type: integer
   */
  user_id: number | string;
  /** The state of the course pace */
  workflow_state: string;
  /**
   * Boolean value depending on exclude weekends setting
   *
   * Type: boolean
   */
  exclude_weekends: boolean | string;
  /** Array of strings representing the days of the work week */
  selected_days_to_skip: number | string[];
  /**
   * Set if the end date is set from course
   *
   * Type: boolean
   */
  hard_end_dates: boolean | string;
  /**
   * Date when course pace is created
   *
   * Format: date-time
   */
  created_at: string;
  /**
   * Course end date
   *
   * Format: date-time
   */
  end_date: string;
  /**
   * Date when course pace is updated
   *
   * Format: date-time
   */
  updated_at: string;
  /**
   * Date when course pace is published
   *
   * Format: date-time
   */
  published_at: string;
  /**
   * The root account ID for this course pace
   *
   * Type: integer
   */
  root_account_id: number | string;
  /**
   * Course start date
   *
   * Format: date-time
   */
  start_date: string;
  /** List of modules and items for this course pace */
  modules: unknown;
  /** Progress of pace publishing */
  progress: Progress;
};

export type Module = {
  /**
   * The ID of the module
   *
   * Type: integer
   */
  id: number | string;
  /** The name of the module */
  name: string;
  /**
   * The position of the module
   *
   * Type: integer
   */
  position: number | string;
  /** List of module items */
  items: ModuleItem[];
  /**
   * The ID of the context for this course pace
   *
   * Type: integer
   */
  context_id: number | string;
  /** The given context for the course pace */
  context_type: string;
};

export type ModuleItem = {
  /**
   * The ID of the module item
   *
   * Type: integer
   */
  id: number | string;
  /**
   * The duration of the module item
   *
   * Type: integer
   */
  duration: number | string;
  /**
   * The course pace id of the module item
   *
   * Type: integer
   */
  course_pace_id: number | string;
  /**
   * The root account id of the module item
   *
   * Type: integer
   */
  root_account_id: number | string;
  /**
   * The module item id of the module item
   *
   * Type: integer
   */
  module_item_id: number | string;
  /** The title of the item assignment */
  assignment_title: string;
  /**
   * The points of the item
   *
   * Type: number
   */
  points_possible: number | string;
  /** The link of the item assignment */
  assignment_link: string;
  /**
   * The current position of the module item
   *
   * Type: integer
   */
  position: number | string;
  /** The module item type of the item assignment */
  module_item_type: string;
  /**
   * Published boolean value for course pace
   *
   * Type: boolean
   */
  published: boolean | string;
};

export type Progress = {
  /**
   * The ID of the Progress object
   *
   * Type: integer
   */
  id: number | string;
  /**
   * The context owning the job.
   *
   * Type: integer
   */
  context_id: number | string;
  context_type: string;
  /**
   * The id of the user who started the job
   *
   * Type: integer
   */
  user_id: number | string;
  /** The type of operation */
  tag: string;
  /**
   * Percent completed
   *
   * Type: integer
   */
  completion: number | string;
  /** The state of the job one of 'queued', 'running', 'completed', 'failed' */
  workflow_state: string;
  /**
   * The time the job was created
   *
   * Format: date-time
   */
  created_at: string;
  /**
   * The time the job was last updated
   *
   * Format: date-time
   */
  updated_at: string;
  /** Optional details about the job */
  message: string;
  /**
   * Optional results of the job. omitted when job is still pending
   *
   * Object
   */
  results: JSONObject;
  /** Url where a progress update can be retrieved */
  url: string;
};
