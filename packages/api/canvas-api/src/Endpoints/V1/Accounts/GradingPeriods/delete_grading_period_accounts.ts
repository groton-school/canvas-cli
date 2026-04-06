import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type delete_grading_period_accountsPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type delete_grading_period_accountsSearchParameters = Masquerade;

type Options = (
  | {
      path: delete_grading_period_accountsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_grading_period_accountsPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_grading_period_accountsSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<delete_grading_period_accountsSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: delete_grading_period_accountsSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: delete_grading_period_accountsSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Delete a grading period
 *
 * <b>204 No Content</b> response code is returned if the deletion was
 * successful.
 *
 * Nickname: delete_grading_period_accounts
 */
export async function delete_grading_period_accounts(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/accounts/{account_id}/grading_periods/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
