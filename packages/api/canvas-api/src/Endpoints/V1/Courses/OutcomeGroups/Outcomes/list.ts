import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { OutcomeLink } from '../../../../../Resources/OutcomeGroups.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * The detail level of the outcomes. Defaults to "abbrev". Specify "full"
     * for more information.
     */
    outcome_style: string;
  }>;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    }
);

/**
 * List linked outcomes
 *
 * A paginated list of the immediate OutcomeLink children of the outcome group.
 *
 * Nickname: list_linked_outcomes_courses
 */
export async function list(options: Options) {
  const response = await client().fetchAs<OutcomeLink[]>(
    `/api/v1/courses/{course_id}/outcome_groups/{id}/outcomes`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
