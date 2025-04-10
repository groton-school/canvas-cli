import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../../Client.js';
import { OutcomeLink } from '../../../../../Resources/OutcomeGroups.js';

export type listPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

export type listSearchParameters = {
  /**
   * The detail level of the outcomes. Defaults to "abbrev". Specify "full"
   * for more information.
   */
  outcome_style: string;
} & Paginated;

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
 * Nickname: list_linked_outcomes_accounts
 */
export async function list({ pathParams, searchParams }: Options) {
  return await client().fetchAs<OutcomeLink[]>(
    `/v1/accounts/{account_id}/outcome_groups/{id}/outcomes`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
