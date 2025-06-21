import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { OutcomeGroup } from '../../../../../Resources/OutcomeGroups.js';

export type listPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

export type listSearchParameters = Masquerade & Paginated;

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
 * List subgroups
 *
 * A paginated list of the immediate OutcomeGroup children of the outcome group.
 *
 * Nickname: list_subgroups_accounts
 */
export async function list(options: Options) {
  const response = await client().fetchAs<OutcomeGroup[]>(
    `/api/v1/accounts/{account_id}/outcome_groups/{id}/subgroups`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
