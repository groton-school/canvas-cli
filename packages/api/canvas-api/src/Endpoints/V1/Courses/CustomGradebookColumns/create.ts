import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { CustomColumn } from '../../../../Resources/CustomGradebookColumns.js';

export type createPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /** No description */
  'column[title]': string;
  /**
   * The position of the column relative to other custom columns
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  'column[position]': number | string;
  /**
   * Hidden columns are not displayed in the gradebook
   *
   * Type: boolean
   */
  'column[hidden]': boolean | string;
  /**
   * Set this if the column is created by a teacher. The gradebook only
   * supports one teacher_notes column.
   *
   * Type: boolean
   */
  'column[teacher_notes]': boolean | string;
  /**
   * Set this to prevent the column from being editable in the gradebook ui
   *
   * Type: boolean
   */
  'column[read_only]': boolean | string;
};

type Options = {
  pathParams: createPathParameters;
} & (
  | {
      searchParams?: Partial<createSearchParameters>;
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      searchParams: createSearchParameters;
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
