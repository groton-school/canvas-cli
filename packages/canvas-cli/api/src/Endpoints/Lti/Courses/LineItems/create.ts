import { JSONObject } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { LineItem } from '../../../../Resources/LineItems.js';

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
  /**
   * The maximum score for the line item. Scores created for the Line Item may
   * exceed this value.
   *
   * Type: number
   *
   * Format: 'float'
   */
  scoreMaximum: number | string;
  /**
   * The label for the Line Item. If no resourceLinkId is specified this value
   * will also be used as the name of the placeholder assignment.
   */
  label: string;
  /**
   * A Tool Provider specified id for the Line Item. Multiple line items may
   * share the same resourceId within a given context.
   */
  resourceId: string;
  /**
   * A value used to qualify a line Item beyond its ids. Line Items may be
   * queried by this value in the List endpoint. Multiple line items can share
   * the same tag within a given context.
   */
  tag: string;
  /**
   * The resource link id the Line Item should be attached to. This value
   * should match the LTI id of the Canvas assignment associated with the
   * tool.
   */
  resourceLinkId: string;
  /**
   * The ISO8601 date and time when the line item is made available.
   * Corresponds to the assignment's unlock_at date.
   */
  startDateTime: string;
  /**
   * The ISO8601 date and time when the line item stops receiving submissions.
   * Corresponds to the assignment's due_at date.
   */
  endDateTime: string;
  /**
   * (EXTENSION) - Optional block to set Assignment Submission Type when
   * creating a new assignment is created. type - 'none' or 'external_tool'::
   * external_tool_url - Submission URL only used when type:
   * 'external_tool'::
   *
   * Object
   */
  'https://canvas.instructure.com/lti/submission_type': JSONObject;
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
 * Create a Line Item
 *
 * Create a new Line Item
 *
 * Nickname: create_line_item
 */
export async function create(options: Options) {
  const response = await client().fetchAs<LineItem>(
    `/api/lti/courses/{course_id}/line_items`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
