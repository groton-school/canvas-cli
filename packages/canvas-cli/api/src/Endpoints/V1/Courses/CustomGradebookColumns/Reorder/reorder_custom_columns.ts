import { client } from '../../../../../Client.js';

export type reorder_custom_columnsPathParameters = {
  /** ID */
  course_id: string;
};

export type reorder_custom_columnsFormParameters = {
  /**
   * No description
   *
   * Format: 'int64'
   */
  order: number[];
};

type Options = {
  pathParams: reorder_custom_columnsPathParameters;
} & (
  | {
      params?: Partial<reorder_custom_columnsFormParameters>;
      strict?: false;
    }
  | {
      params: reorder_custom_columnsFormParameters;
      strict: true;
    }
);

/**
 * Reorder custom columns
 *
 * Puts the given columns in the specified order
 *
 * <b>200 OK</b> is returned if successful
 *
 * Nickname: reorder_custom_columns
 */
export async function reorder_custom_columns({ pathParams, params }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/custom_gradebook_columns/reorder`,
    {
      method: 'POST',
      pathParams,
      params
    }
  );
}
