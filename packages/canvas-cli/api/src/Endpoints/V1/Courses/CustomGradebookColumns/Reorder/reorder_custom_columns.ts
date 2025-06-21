import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';

export type reorder_custom_columnsPathParameters = {
  /** ID */
  course_id: string;
};

export type reorder_custom_columnsSearchParameters = Masquerade;

export type reorder_custom_columnsFormParameters = Masquerade & {
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
      searchParams?: Partial<reorder_custom_columnsSearchParameters>;
      params?: Partial<reorder_custom_columnsFormParameters>;
      strict?: false;
    }
  | {
      searchParams: reorder_custom_columnsSearchParameters;
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
export async function reorder_custom_columns(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/custom_gradebook_columns/reorder`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
