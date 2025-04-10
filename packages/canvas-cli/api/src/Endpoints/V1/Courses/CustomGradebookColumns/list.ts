import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { CustomColumn } from '../../../../Resources/CustomGradebookColumns.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
};

export type listSearchParameters = {
  /** Include hidden parameters (defaults to false) */
  include_hidden: boolean;
} & Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams?: listSearchParameters;
      strict: true;
    }
);

/**
 * List custom gradebook columns
 *
 * A paginated list of all custom gradebook columns for a course
 *
 * Nickname: list_custom_gradebook_columns
 */
export async function list({ pathParams, searchParams }: Options) {
  return await client().fetchAs<CustomColumn[]>(
    `/v1/courses/{course_id}/custom_gradebook_columns`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
