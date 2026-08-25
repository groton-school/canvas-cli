import { JSONValue } from '@battis/typescript-tricks';

/**
 * A planner note
 */
export type PlannerNote = {
  /**
   * The ID of the planner note
   *
   * type: integer
   */
  id: number | string;
  /**
   * The title for a planner note
   *
   *
   */
  title: string;
  /**
   * The description of the planner note
   *
   *
   */
  description: string;
  /**
   * The id of the associated user creating the planner note
   *
   * type: integer
   */
  user_id: number | string;
  /**
   * The current published state of the planner note
   *
   *
   */
  workflow_state: string;
  /**
   * The course that the note is in relation too, if applicable
   *
   * type: integer
   */
  course_id: number | string;
  /**
   * The datetime of when the planner note should show up on their planner
   *
   * format: date-time
   */
  todo_date: string;
  /**
   * the type of the linked learning object
   *
   *
   */
  linked_object_type: string;
  /**
   * the id of the linked learning object
   *
   * type: integer
   */
  linked_object_id: number | string;
  /**
   * the Canvas web URL of the linked learning object
   *
   *
   */
  linked_object_html_url: string;
  /**
   * the API URL of the linked learning object
   *
   *
   */
  linked_object_url: string;
};

/**
 * User-controlled setting for whether an item should be displayed on the planner or not
 */
export type PlannerOverride = {
  /**
   * The ID of the planner override
   *
   * type: integer
   */
  id: number | string;
  /**
   * The type of the associated object for the planner override
   *
   *
   */
  plannable_type: string;
  /**
   * The id of the associated object for the planner override
   *
   * type: integer
   */
  plannable_id: number | string;
  /**
   * The id of the associated user for the planner override
   *
   * type: integer
   */
  user_id: number | string;
  /**
   * The id of the plannable's associated assignment, if it has one
   *
   * type: integer
   */
  assignment_id: number | string;
  /**
   * The current published state of the item, synced with the associated object
   *
   *
   */
  workflow_state: string;
  /**
   * Controls whether or not the associated plannable item is marked complete on the planner
   *
   * type: boolean
   */
  marked_complete: boolean | string;
  /**
   * Controls whether or not the associated plannable item shows up in the opportunities list
   *
   * type: boolean
   */
  dismissed: boolean | string;
  /**
   * The datetime of when the planner override was created
   *
   * format: date-time
   */
  created_at: string;
  /**
   * The datetime of when the planner override was updated
   *
   * format: date-time
   */
  updated_at: string;
  /**
   * The datetime of when the planner override was deleted, if applicable
   *
   * format: date-time
   */
  deleted_at: string;
};
