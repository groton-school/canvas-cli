import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { OutcomeLink } from '../../../../Resources/OutcomeGroups.js';

export type getPathParameters = {
  /** ID */
  account_id: string;
};

export type getSearchParameters = {
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
} & Paginated;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams?: getSearchParameters;
      strict: true;
    }
);

/**
 * Get all outcome links for context
 *
 * Nickname: get_all_outcome_links_for_context_accounts
 */
export async function get({ pathParams, searchParams }: Options) {
  return await client().fetchAs<OutcomeLink[]>(
    `/v1/accounts/{account_id}/outcome_group_links`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
