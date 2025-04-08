/** A planner note */
export type PlannerNote = {
  /**
   * The ID of the planner note
   *
   * Type: integer
   */
  id: number;
  /** The title for a planner note */
  title: string;
  /** The description of the planner note */
  description: string;
  /**
   * The id of the associated user creating the planner note
   *
   * Type: integer
   */
  user_id: number;
  /** The current published state of the planner note */
  workflow_state: string;
  /**
   * The course that the note is in relation too, if applicable
   *
   * Type: integer
   */
  course_id: number;
  /**
   * The datetime of when the planner note should show up on their planner
   *
   * Format: date-time
   */
  todo_date: string;
  /** The type of the linked learning object */
  linked_object_type: string;
  /**
   * The id of the linked learning object
   *
   * Type: integer
   */
  linked_object_id: number;
  /** The Canvas web URL of the linked learning object */
  linked_object_html_url: string;
  /** The API URL of the linked learning object */
  linked_object_url: string;
};

/**
 * User-controlled setting for whether an item should be displayed on the
 * planner or not
 */
export type PlannerOverride = {
  /**
   * The ID of the planner override
   *
   * Type: integer
   */
  id: number;
  /** The type of the associated object for the planner override */
  plannable_type: string;
  /**
   * The id of the associated object for the planner override
   *
   * Type: integer
   */
  plannable_id: number;
  /**
   * The id of the associated user for the planner override
   *
   * Type: integer
   */
  user_id: number;
  /**
   * The id of the plannable's associated assignment, if it has one
   *
   * Type: integer
   */
  assignment_id: number;
  /** The current published state of the item, synced with the associated object */
  workflow_state: string;
  /**
   * Controls whether or not the associated plannable item is marked complete on
   * the planner
   */
  marked_complete: boolean;
  /**
   * Controls whether or not the associated plannable item shows up in the
   * opportunities list
   */
  dismissed: boolean;
  /**
   * The datetime of when the planner override was created
   *
   * Format: date-time
   */
  created_at: string;
  /**
   * The datetime of when the planner override was updated
   *
   * Format: date-time
   */
  updated_at: string;
  /**
   * The datetime of when the planner override was deleted, if applicable
   *
   * Format: date-time
   */
  deleted_at: string;
};
