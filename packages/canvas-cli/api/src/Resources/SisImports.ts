import { File } from './Files.js';
import { User } from './Users.js';

export type SisImportData = {
  /** The type of SIS import */
  import_type: string;
  /** Which files were included in the SIS import */
  supplied_batches: string[];
  /** The number of rows processed for each type of import */
  counts: SisImportCounts;
};

export type SisImportStatistic = {
  /**
   * This is the number of items that were created.
   *
   * Type: integer
   */
  created: number;
  /**
   * This is the number of items that marked as completed. This only applies to
   * courses and enrollments.
   *
   * Type: integer
   */
  concluded: number;
  /**
   * This is the number of Enrollments that were marked as 'inactive'. This only
   * applies to enrollments.
   *
   * Type: integer
   */
  deactivated: number;
  /**
   * This is the number of items that were set to an active state from a
   * completed, inactive, or deleted state.
   *
   * Type: integer
   */
  restored: number;
  /**
   * This is the number of items that were deleted.
   *
   * Type: integer
   */
  deleted: number;
};

export type SisImportStatistics = {
  /**
   * This is the total number of items that were changed in the sis import.
   * There are a few caveats that can cause this number to not add up to the
   * individual counts. There are some state changes that happen that have no
   * impact to the object. An example would be changing a course from 'created'
   * to 'claimed'. Both of these would be considered an active course, but would
   * increment this counter. In this example the course would not increment the
   * created or restored counters for course statistic.
   *
   * Type: integer
   */
  total_state_changes: number;
  /** This contains that statistics for accounts. */
  Account: SisImportStatistic;
  /** This contains that statistics for terms. */
  EnrollmentTerm: SisImportStatistic;
  /**
   * This contains that statistics for communication channels. This is an
   * indirect effect from creating or deleting a user.
   */
  CommunicationChannel: SisImportStatistic;
  /** This contains that statistics for abstract courses. */
  AbstractCourse: SisImportStatistic;
  /** This contains that statistics for courses. */
  Course: SisImportStatistic;
  /** This contains that statistics for course sections. */
  CourseSection: SisImportStatistic;
  /** This contains that statistics for enrollments. */
  Enrollment: SisImportStatistic;
  /** This contains that statistics for group categories. */
  GroupCategory: SisImportStatistic;
  /** This contains that statistics for groups. */
  Group: SisImportStatistic;
  /**
   * This contains that statistics for group memberships. This can be a direct
   * impact from the import or indirect from an enrollment being deleted.
   */
  GroupMembership: SisImportStatistic;
  /**
   * This contains that statistics for pseudonyms. Pseudonyms are logins for
   * users, and are the object that ties an enrollment to a user. This would be
   * impacted from the user importer.
   */
  Pseudonym: SisImportStatistic;
  /** This contains that statistics for user observers. */
  UserObserver: SisImportStatistic;
  /** This contains that statistics for account users. */
  AccountUser: SisImportStatistic;
};

export type SisImportCounts = {
  /** Type: integer */
  accounts: number;
  /** Type: integer */
  terms: number;
  /** Type: integer */
  abstract_courses: number;
  /** Type: integer */
  courses: number;
  /** Type: integer */
  sections: number;
  /** Type: integer */
  xlists: number;
  /** Type: integer */
  users: number;
  /** Type: integer */
  enrollments: number;
  /** Type: integer */
  groups: number;
  /** Type: integer */
  group_memberships: number;
  /** Type: integer */
  grade_publishing_results: number;
  /**
   * The number of courses that were removed because they were not included in
   * the batch for batch_mode imports. Only included if courses were deleted
   *
   * Type: integer
   */
  batch_courses_deleted: number;
  /**
   * The number of sections that were removed because they were not included in
   * the batch for batch_mode imports. Only included if sections were deleted
   *
   * Type: integer
   */
  batch_sections_deleted: number;
  /**
   * The number of enrollments that were removed because they were not included
   * in the batch for batch_mode imports. Only included if enrollments were
   * deleted
   *
   * Type: integer
   */
  batch_enrollments_deleted: number;
  /** Type: integer */
  error_count: number;
  /** Type: integer */
  warning_count: number;
};

export type SisImport = {
  /**
   * The unique identifier for the SIS import.
   *
   * Type: integer
   */
  id: number;
  /**
   * The date the SIS import was created.
   *
   * Format: date-time
   */
  created_at: string;
  /**
   * The date the SIS import finished. Returns null if not finished.
   *
   * Format: date-time
   */
  ended_at: string;
  /**
   * The date the SIS import was last updated.
   *
   * Format: date-time
   */
  updated_at: string;
  /**
   * The current state of the SIS import.
   *
   * - 'initializing': The SIS import is being created, if this gets stuck in
   *   initializing, it will not import and will continue on to next import.
   * - 'created': The SIS import has been created.
   * - 'importing': The SIS import is currently processing.
   * - 'cleanup_batch': The SIS import is currently cleaning up courses, sections,
   *   and enrollments not included in the batch for batch_mode imports.
   * - 'imported': The SIS import has completed successfully.
   * - 'imported_with_messages': The SIS import completed with errors or warnings.
   * - 'aborted': The SIS import was aborted.
   * - 'failed_with_messages': The SIS import failed with errors.
   * - 'failed': The SIS import failed.
   * - 'restoring': The SIS import is restoring states of imported items.
   * - 'partially_restored': The SIS import is restored some of the states of
   *   imported items. This is generally due to passing a param like undelete
   *   only.
   * - 'restored': The SIS import is restored all of the states of imported items.
   */
  workflow_state: string;
  /** Data */
  data: SisImportData;
  /** Statistics */
  statistics: SisImportStatistics;
  /**
   * The progress of the SIS import. The progress will reset when using
   * batch_mode and have a different progress for the cleanup stage
   */
  progress: string;
  /**
   * The errors_attachment api object of the SIS import. Only available if there
   * are errors or warning and import has completed.
   */
  errors_attachment: File;
  /** The user that initiated the sis_batch. See the Users API for details. */
  user: User;
  /**
   * Only imports that are complete will get this data. An array of
   * CSV_file/warning_message pairs.
   */
  processing_warnings: string[][];
  /** An array of CSV_file/error_message pairs. */
  processing_errors: string[][];
  /** Whether the import was run in batch mode. */
  batch_mode: boolean;
  /** The term the batch was limited to. */
  batch_mode_term_id: string;
  /**
   * Enables batch mode against all terms in term file. Requires
   * change_threshold to be set.
   */
  multi_term_batch_mode: boolean;
  /** When set the import will skip any deletes. */
  skip_deletes: boolean;
  /** Whether UI changes were overridden. */
  override_sis_stickiness: boolean;
  /** Whether stickiness was added to the batch changes. */
  add_sis_stickiness: boolean;
  /** Whether stickiness was cleared. */
  clear_sis_stickiness: boolean;
  /** Whether a diffing job failed because the threshold limit got exceeded. */
  diffing_threshold_exceeded: boolean;
  /** The identifier of the data set that this SIS batch diffs against */
  diffing_data_set_identifier: string;
  /** Whether diffing remaster data was enabled. */
  diffing_remaster: boolean;
  /**
   * The ID of the SIS Import that this import was diffed against
   *
   * Type: integer
   */
  diffed_against_import_id: number;
  /** An array of CSV files for processing */
  csv_attachments: File[][];
};
