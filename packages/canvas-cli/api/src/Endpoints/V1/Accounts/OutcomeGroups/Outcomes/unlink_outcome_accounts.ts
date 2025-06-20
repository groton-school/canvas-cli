import { client } from '../../../../../Client.js';
import { OutcomeLink } from '../../../../../Resources/OutcomeGroups.js';

export type unlink_outcome_accountsPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
  /** ID */
  outcome_id: string;
};

type Options = {
  pathParams: unlink_outcome_accountsPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Unlink an outcome
 *
 * Unlinking an outcome only deletes the outcome itself if this was the last
 * link to the outcome in any group in any context. Aligned outcomes cannot be
 * deleted; as such, if this is the last link to an aligned outcome, the
 * unlinking will fail.
 *
 * Nickname: unlink_outcome_accounts
 */
export async function unlink_outcome_accounts(options: Options) {
  const response = await client().fetchAs<OutcomeLink>(
    `/api/v1/accounts/{account_id}/outcome_groups/{id}/outcomes/{outcome_id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
