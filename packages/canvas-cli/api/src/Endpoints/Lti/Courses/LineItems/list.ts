import { client } from '../../../../Client.js';
import { LineItem } from '../../../../Resources/LineItems.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
};

export type listSearchParameters = {
  /** If specified only Line Items with this tag will be included. */
  tag: string;
  /** If specified only Line Items with this resource_id will be included. */
  resource_id: string;
  /**
   * If specified only Line Items attached to the specified resource_link_id
   * will be included.
   */
  resource_link_id: string;
  /** May be used to limit the number of Line Items returned in a page */
  limit: string;
  /**
   * Array of additional information to include.
   *
   * "launch_url":: includes the launch URL for each line item using the
   * "https://canvas.instructure.com/lti/launch_url" extension
   */
  include: string[];
};

type Options = {
  pathParams: listPathParameters;
  searchParams?: listSearchParameters;
};

/**
 * List line Items
 *
 * List all Line Items for a course
 *
 * Nickname: list_line_items
 */
export async function list({ pathParams, searchParams }: Options) {
  return await client().fetchAs<LineItem>(
    `/lti/courses/{course_id}/line_items`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
