import { client } from '../../../../Client.js';
import { CustomColumn } from '../../../../Resources/CustomGradebookColumns.js';

export type createPathParameters = {
  /** ID */
  course_id: string;
};

export type createFormParameters = {
  /** No description */
  'column[title]': string;
  /**
   * The position of the column relative to other custom columns
   *
   * Format: 'int64'
   */
  'column[position]': number;
  /** Hidden columns are not displayed in the gradebook */
  'column[hidden]': boolean;
  /**
   * Set this if the column is created by a teacher. The gradebook only
   * supports one teacher_notes column.
   */
  'column[teacher_notes]': boolean;
  /** Set this to prevent the column from being editable in the gradebook ui */
  'column[read_only]': boolean;
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
 * Create a custom gradebook column
 *
 * Create a custom gradebook column
 *
 * Nickname: create_custom_gradebook_column
 */
export async function create(options: Options) {
  const response = await client().fetchAs<CustomColumn>(
    `/api/v1/courses/{course_id}/custom_gradebook_columns`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
