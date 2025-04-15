import { JSONObject } from '@battis/typescript-tricks';
import { client } from '../../../../Client.js';
import { ContentMigration } from '../../../../Resources/ContentMigrations.js';

export type createPathParameters = {
  /** ID */
  account_id: string;
};

export type createFormParameters = {
  /**
   * The type of the migration. Use the
   * {api:ContentMigrationsController#available_migrators Migrator} endpoint
   * to see all available migrators. Default allowed values:
   * canvas_cartridge_importer, common_cartridge_importer,
   * course_copy_importer, zip_file_importer, qti_converter, moodle_converter
   */
  migration_type: string;
  /**
   * Required if uploading a file. This is the first step in uploading a file
   * to the content migration. See the {file:file_uploads.html File Upload
   * Documentation} for details on the file upload workflow.
   */
  'pre_attachment[name]': string;
  /**
   * Other file upload properties, See {file:file_uploads.html File Upload
   * Documentation}
   */
  'pre_attachment[*]': string;
  /** A URL to download the file from. Must not require authentication. */
  'settings[file_url]': string;
  /**
   * The id of a ContentExport to import. This allows you to import content
   * previously exported from Canvas without needing to download and re-upload
   * it.
   */
  'settings[content_export_id]': string;
  /**
   * The course to copy from for a course copy migration. (required if doing
   * course copy)
   */
  'settings[source_course_id]': string;
  /** The folder to unzip the .zip file into for a zip_file_import. */
  'settings[folder_id]': string;
  /**
   * Whether to overwrite quizzes with the same identifiers between content
   * packages.
   */
  'settings[overwrite_quizzes]': boolean;
  /**
   * The existing question bank ID to import questions into if not specified
   * in the content package.
   *
   * Format: 'int64'
   */
  'settings[question_bank_id]': number;
  /**
   * The question bank to import questions into if not specified in the
   * content package, if both bank id and name are set, id will take
   * precedence.
   */
  'settings[question_bank_name]': string;
  /**
   * The id of a module in the target course. This will add all imported items
   * (that can be added to a module) to the given module.
   *
   * Format: 'int64'
   */
  'settings[insert_into_module_id]': number;
  /**
   * If provided (and +insert_into_module_id+ is supplied), only add objects
   * of the specified type to the module.
   */
  'settings[insert_into_module_type]': string;
  /**
   * The (1-based) position to insert the imported items into the course (if
   * +insert_into_module_id+ is supplied). If this parameter is omitted, items
   * will be added to the end of the module.
   *
   * Format: 'int64'
   */
  'settings[insert_into_module_position]': number;
  /**
   * The id of an assignment group in the target course. If provided, all
   * imported assignments will be moved to the given assignment group.
   *
   * Format: 'int64'
   */
  'settings[move_to_assignment_group_id]': number;
  /**
   * Set of importers to skip, even if otherwise selected by migration
   * settings.
   *
   * Array
   */
  'settings[importer_skips]': string[];
  /**
   * Import the "use as blueprint course" setting as well as the list of
   * locked items from the source course or package. The destination course
   * must not be associated with an existing blueprint course and cannot have
   * any student or observer enrollments.
   */
  'settings[import_blueprint_settings]': boolean;
  /** Whether to shift dates in the copied course */
  'date_shift_options[shift_dates]': boolean;
  /**
   * The original start date of the source content/course
   *
   * Format: date
   */
  'date_shift_options[old_start_date]': string;
  /**
   * The original end date of the source content/course
   *
   * Format: date
   */
  'date_shift_options[old_end_date]': string;
  /**
   * The new start date for the content/course
   *
   * Format: date
   */
  'date_shift_options[new_start_date]': string;
  /**
   * The new end date for the source content/course
   *
   * Format: date
   */
  'date_shift_options[new_end_date]': string;
  /**
   * Move anything scheduled for day 'X' to the specified day. (0-Sunday,
   * 1-Monday, 2-Tuesday, 3-Wednesday, 4-Thursday, 5-Friday, 6-Saturday)
   *
   * Format: 'int64'
   */
  'date_shift_options[day_substitutions][X]': number;
  /**
   * Whether to remove dates in the copied course. Cannot be used in
   * conjunction with _shift_dates_.
   */
  'date_shift_options[remove_dates]': boolean;
  /**
   * If set, perform a selective import instead of importing all content. The
   * migration will identify the contents of the package and then stop in the
   * +waiting_for_select+ workflow state. At this point, use the
   * {api:ContentMigrationsController#content_list List items endpoint} to
   * enumerate the contents of the package, identifying the copy parameters
   * for the desired content. Then call the
   * {api:ContentMigrationsController#update Update endpoint} and provide
   * these copy parameters to start the import.
   */
  selective_import: boolean;
  /**
   * For +course_copy_importer+ migrations, this parameter allows you to
   * select the objects to copy without using the +selective_import+ argument
   * and +waiting_for_select+ state as is required for uploaded imports
   * (though that workflow is also supported for course copy migrations). The
   * keys are object types like 'files', 'folders', 'pages', etc. The value
   * for each key is a list of object ids. An id can be an integer or a
   * string. Multiple object types can be selected in the same call.
   *
   * Hash
   */
  select: JSONObject;
};

type Options = {
  pathParams: createPathParameters;
} & (
  | {
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      params: createFormParameters;
      strict: true;
    }
);

/**
 * Create a content migration
 *
 * Create a content migration. If the migration requires a file to be uploaded
 * the actual processing of the file will start once the file upload process is
 * completed. File uploading works as described in the {file:file_uploads.html
 * File Upload Documentation} except that the values are set on a
 * _pre_attachment_ sub-hash.
 *
 * For migrations that don't require a file to be uploaded, like course copy,
 * the processing will begin as soon as the migration is created.
 *
 * You can use the {api:ProgressController#show Progress API} to track the
 * progress of the migration. The migration's progress is linked to with the
 * _progress_url_ value.
 *
 * The two general workflows are:
 *
 * If no file upload is needed:
 *
 * 1. POST to create
 * 2. Use the {api:ProgressController#show Progress} specified in _progress_url_ to
 *    monitor progress
 *
 * For file uploading:
 *
 * 1. POST to create with file info in _pre_attachment_
 * 2. Do {file:file_uploads.html file upload processing} using the data in the
 *    _pre_attachment_ data
 * 3. {api:ContentMigrationsController#show GET} the ContentMigration
 * 4. Use the {api:ProgressController#show Progress} specified in _progress_url_ to
 *    monitor progress
 *
 * (required if doing .zip file upload)
 *
 * Nickname: create_content_migration_accounts
 */
export async function create(options: Options) {
  return await client().fetchAs<ContentMigration>(
    `/api/v1/accounts/{account_id}/content_migrations`,
    {
      method: 'POST',
      ...options
    }
  );
}
