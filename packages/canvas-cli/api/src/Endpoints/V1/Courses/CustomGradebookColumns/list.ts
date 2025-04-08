import { client } from '../../../../Client.js';
import { CustomColumn } from '../../../../Resources/CustomGradebookColumns.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List custom gradebook columns
 *
 * A paginated list of all custom gradebook columns for a course
 *
 * Nickname: list_custom_gradebook_columns
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/custom_gradebook_columns`,
    { method: 'GET', params: parameters }
  );
}
