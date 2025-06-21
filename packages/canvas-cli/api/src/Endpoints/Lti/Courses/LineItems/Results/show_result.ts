import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { Result } from '../../../../../Resources/LiveAssessments.js';

export type show_resultPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  line_item_id: string;
  /** ID */
  id: string;
};

export type show_resultSearchParameters = Masquerade;

type Options = {
  pathParams: show_resultPathParameters;
} & (
  | {
      searchParams?: Partial<show_resultSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: show_resultSearchParameters;
      strict: true;
    }
);

/**
 * Show a Result
 *
 * Show existing Result of a line item.
 *
 * Nickname: show_result
 */
export async function show_result(options: Options) {
  const response = await client().fetchAs<Result>(
    `/api/lti/courses/{course_id}/line_items/{line_item_id}/results/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
