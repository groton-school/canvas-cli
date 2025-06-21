import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { LineItem } from '../../../../Resources/LineItems.js';

export type updatePathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /**
   * The maximum score for the line item. Scores created for the Line Item may
   * exceed this value.
   *
   * Format: 'float'
   */
  scoreMaximum: number;
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
   * The ISO8601 date and time when the line item is made available.
   * Corresponds to the assignment's unlock_at date.
   */
  startDateTime: string;
  /**
   * The ISO8601 date and time when the line item stops receiving submissions.
   * Corresponds to the assignment's due_at date.
   */
  endDateTime: string;
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      searchParams?: Partial<updateSearchParameters>;
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      searchParams: updateSearchParameters;
      params: updateFormParameters;
      strict: true;
    }
);

/**
 * Update a Line Item
 *
 * Update new Line Item
 *
 * Nickname: update_line_item
 */
export async function update(options: Options) {
  const response = await client().fetchAs<LineItem>(
    `/api/lti/courses/{course_id}/line_items/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
