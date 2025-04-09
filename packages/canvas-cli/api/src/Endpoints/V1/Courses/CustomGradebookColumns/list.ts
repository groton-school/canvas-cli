import { client } from '../../../../Client.js';
import { CustomColumn } from '../../../../Resources/CustomGradebookColumns.js';

type listPathParameters = {
  /** ID */
  course_id: string;
};

type listSearchParameters = {
  /** Include hidden parameters (defaults to false) */
  include_hidden: boolean;
};

type Options = {
  pathParams: listPathParameters;
  searchParams?: listSearchParameters;
};

/**
 * List custom gradebook columns
 *
 * A paginated list of all custom gradebook columns for a course
 *
 * Nickname: list_custom_gradebook_columns
 */
export async function list({ pathParams, searchParams }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/custom_gradebook_columns`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
