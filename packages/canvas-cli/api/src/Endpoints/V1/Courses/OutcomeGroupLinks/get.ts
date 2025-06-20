import { Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { OutcomeLink } from '../../../../Resources/OutcomeGroups.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
};

export type getSearchParameters = Partial<{
  /**
   * The detail level of the outcomes. Defaults to "abbrev". Specify "full"
   * for more information.
   */
  outcome_style: string;
  /**
   * The detail level of the outcome groups. Defaults to "abbrev". Specify
   * "full" for more information.
   */
  outcome_group_style: string;
}> &
  Paginated;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    }
);

/**
 * Get all outcome links for context
 *
 * Nickname: get_all_outcome_links_for_context_courses
 */
export async function get(options: Options) {
  const response = await client().fetchAs<OutcomeLink[]>(
    `/api/v1/courses/{course_id}/outcome_group_links`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
