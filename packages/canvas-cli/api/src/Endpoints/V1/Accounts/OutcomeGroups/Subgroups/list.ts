import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../../Client.js';
import { OutcomeGroup } from '../../../../../Resources/OutcomeGroups.js';

export type listPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

export type listSearchParameters = Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
export async function list({ pathParams }: Options) {
  return await client().fetchAs<OutcomeGroup[]>(
    `/v1/accounts/{account_id}/outcome_groups/{id}/subgroups`,
    {
      method: 'GET',
      pathParams
    }
  );
}
