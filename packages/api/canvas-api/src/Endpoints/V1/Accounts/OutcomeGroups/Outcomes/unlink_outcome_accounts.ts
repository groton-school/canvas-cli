import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { OutcomeLink } from '../../../../../Resources/OutcomeGroups.js';

export type unlink_outcome_accountsPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  account_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  outcome_id: string | number;
};

export type unlink_outcome_accountsSearchParameters = Masquerade;

type Options = (
  | {
      path: unlink_outcome_accountsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: unlink_outcome_accountsPathParameters;
    }
) &
  (
    | {
        query?: Partial<unlink_outcome_accountsSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<unlink_outcome_accountsSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: unlink_outcome_accountsSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: unlink_outcome_accountsSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Unlink an outcome
 *
 * Unlinking an outcome only deletes the outcome itself if this was the last
link to the outcome in any group in any context. Aligned outcomes cannot be
deleted; as such, if this is the last link to an aligned outcome, the
unlinking will fail.
 *
 * nickname: unlink_outcome_accounts
 *
 * 
 *
 * 
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
