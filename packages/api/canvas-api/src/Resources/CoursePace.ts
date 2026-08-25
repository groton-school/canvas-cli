import { JSONObject, JSONValue } from '@battis/typescript-tricks';

/**
 *
 */
export type CoursePace = {
  /**
   * the ID of the course pace
   *
   * type: integer
   */
  id: number | string;
  /**
   * the ID of the course
   *
   * type: integer
   */
  course_id: number | string;
  /**
   * the ID of the user for this course pace
   *
   * type: integer
   */
  user_id: number | string;
  /**
   * the state of the course pace
   *
   *
   */
  workflow_state: string;
  /**
   * boolean value depending on exclude weekends setting
   *
   * type: boolean
   */
  exclude_weekends: boolean | string;
  /**
   * array of strings representing the days of the work week
   *
   *
   */
  selected_days_to_skip: number | string[];
  /**
   * set if the end date is set from course
   *
   * type: boolean
   */
  hard_end_dates: boolean | string;
  /**
   * date when course pace is created
   *
   * format: date-time
   */
  created_at: string;
  /**
   * course end date
   *
   * format: date-time
   */
  end_date: string;
  /**
   * date when course pace is updated
   *
   * format: date-time
   */
  updated_at: string;
  /**
   * date when course pace is published
   *
   * format: date-time
   */
  published_at: string;
  /**
   * the root account ID for this course pace
   *
   * type: integer
   */
  root_account_id: number | string;
  /**
   * course start date
   *
   * format: date-time
   */
  start_date: string;
  /**
   * list of modules and items for this course pace
   *
   *
   */
  modules: JSONValue;
  /**
   * progress of pace publishing
   *
   *
   */
  progress: Progress;
};

/**
 *
 */
export type Module = {
  /**
   * the ID of the module
   *
   * type: integer
   */
  id: number | string;
  /**
   * the name of the module
   *
   *
   */
  name: string;
  /**
   * the position of the module
   *
   * type: integer
   */
  position: number | string;
  /**
   * list of module items
   *
   *
   */
  items: ModuleItem[];
  /**
   * the ID of the context for this course pace
   *
   * type: integer
   */
  context_id: number | string;
  /**
   * The given context for the course pace
   *
   *
   */
  context_type: string;
};

/**
 *
 */
export type ModuleItem = {
  /**
   * the ID of the module item
   *
   * type: integer
   */
  id: number | string;
  /**
   * the duration of the module item
   *
   * type: integer
   */
  duration: number | string;
  /**
   * the course pace id of the module item
   *
   * type: integer
   */
  course_pace_id: number | string;
  /**
   * the root account id of the module item
   *
   * type: integer
   */
  root_account_id: number | string;
  /**
   * the module item id of the module item
   *
   * type: integer
   */
  module_item_id: number | string;
  /**
   * The title of the item assignment
   *
   *
   */
  assignment_title: string;
  /**
   * The points of the item
   *
   * type: number
   */
  points_possible: number | string;
  /**
   * The link of the item assignment
   *
   *
   */
  assignment_link: string;
  /**
   * the current position of the module item
   *
   * type: integer
   */
  position: number | string;
  /**
   * The module item type of the item assignment
   *
   *
   */
  module_item_type: string;
  /**
   * published boolean value for course pace
   *
   * type: boolean
   */
  published: boolean | string;
};

/**
 *
 */
export type Progress = {
  /**
   * the ID of the Progress object
   *
   * type: integer
   */
  id: number | string;
  /**
   * the context owning the job.
   *
   * type: integer
   */
  context_id: number | string;
  /**
   *
   *
   *
   */
  context_type: string;
  /**
   * the id of the user who started the job
   *
   * type: integer
   */
  user_id: number | string;
  /**
   * the type of operation
   *
   *
   */
  tag: string;
  /**
   * percent completed
   *
   * type: integer
   */
  completion: number | string;
  /**
   * the state of the job one of 'queued', 'running', 'completed', 'failed'
   *
   *
   */
  workflow_state: string;
  /**
   * the time the job was created
   *
   * format: date-time
   */
  created_at: string;
  /**
   * the time the job was last updated
   *
   * format: date-time
   */
  updated_at: string;
  /**
   * optional details about the job
   *
   *
   */
  message: string;
  /**
   * optional results of the job. omitted when job is still pending
   *
   * object
   */
  results: JSONObject;
  /**
   * url where a progress update can be retrieved
   *
   *
   */
  url: string;
};
