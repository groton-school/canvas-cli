export type BlueprintTemplate = {
  /**
   * The ID of the template.
   *
   * Format: int64
   */
  id: number;
  /**
   * The ID of the Course the template belongs to.
   *
   * Format: int64
   */
  course_id: number;
  /**
   * Time when the last export was completed
   *
   * Format: 'date-time'
   */
  last_export_completed_at: string;
  /**
   * Number of associated courses for the template
   *
   * Type: integer
   */
  associated_course_count: number;
  /** Details of the latest migration */
  latest_migration: BlueprintMigration;
};

export type BlueprintMigration = {
  /**
   * The ID of the migration.
   *
   * Format: int64
   */
  id: number;
  /**
   * The ID of the template the migration belongs to. Only present when querying
   * a blueprint course.
   *
   * Format: int64
   */
  template_id: number;
  /**
   * The ID of the associated course's blueprint subscription. Only present when
   * querying a course associated with a blueprint.
   *
   * Format: int64
   */
  subscription_id: number;
  /**
   * The ID of the user who queued the migration.
   *
   * Format: int64
   */
  user_id: number;
  /**
   * Current state of the content migration: queued, exporting, imports_queued,
   * completed, exports_failed, imports_failed
   */
  workflow_state: string;
  /**
   * Time when the migration was queued
   *
   * Format: 'date-time'
   */
  created_at: string;
  /**
   * Time when the exports begun
   *
   * Format: 'date-time'
   */
  exports_started_at: string;
  /**
   * Time when the exports were completed and imports were queued
   *
   * Format: 'date-time'
   */
  imports_queued_at: string;
  /**
   * Time when the imports were completed
   *
   * Format: 'date-time'
   */
  imports_completed_at: string;
  /** User-specified comment describing changes made in this operation */
  comment: string;
};

/** A set of restrictions on editing for copied objects in associated courses */
export type BlueprintRestriction = {
  /** Restriction on main content (e.g. title, description). */
  content: boolean;
  /** Restriction on points possible for assignments and graded learning objects */
  points: boolean;
  /** Restriction on due dates for assignments and graded learning objects */
  due_dates: boolean;
  /** Restriction on availability dates for an object */
  availability_dates: boolean;
};

/**
 * Describes a learning object change propagated to associated courses from a
 * blueprint course
 */
export type ChangeRecord = {
  /**
   * The ID of the learning object that was changed in the blueprint course.
   *
   * Format: int64
   */
  asset_id: number;
  /**
   * The type of the learning object that was changed in the blueprint course.
   * One of 'assignment', 'attachment', 'discussion_topic', 'external_tool',
   * 'quiz', 'wiki_page', 'syllabus', or 'settings'. For 'syllabus' or
   * 'settings', the asset_id is the course id.
   */
  asset_type: string;
  /** The name of the learning object that was changed in the blueprint course. */
  asset_name: string;
  /** The type of change; one of 'created', 'updated', 'deleted' */
  change_type: string;
  /** The URL of the changed object */
  html_url: string;
  /** Whether the object is locked in the blueprint */
  locked: boolean;
  /**
   * A list of ExceptionRecords for linked courses that did not receive this
   * update.
   */
  exceptions: unknown[];
};

/**
 * Lists associated courses that did not receive a change propagated from a
 * blueprint
 */
export type ExceptionRecord = {
  /**
   * The ID of the associated course
   *
   * Format: int64
   */
  course_id: number;
  /**
   * A list of change classes in the associated course's copy of the item that
   * prevented a blueprint change from being applied. One or more of ['content',
   * 'points', 'due_dates', 'availability_dates'].
   */
  conflicting_changes: unknown[];
};

/** Associates a course with a blueprint */
export type BlueprintSubscription = {
  /**
   * The ID of the blueprint course subscription
   *
   * Format: int64
   */
  id: number;
  /**
   * The ID of the blueprint template the associated course is subscribed to
   *
   * Format: int64
   */
  template_id: number;
  /** The blueprint course subscribed to */
  blueprint_course: unknown;
};
