import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { Account } from '../../../../Resources/Accounts.js';

export type createPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /** The name of the new sub-account. */
  'account[name]': string;
  /** The account's identifier in the Student Information System. */
  'account[sis_account_id]': string;
  /**
   * The default course storage quota to be used, if not otherwise specified.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  'account[default_storage_quota_mb]': number | string;
  /**
   * The default user storage quota to be used, if not otherwise specified.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  'account[default_user_storage_quota_mb]': number | string;
  /**
   * The default group storage quota to be used, if not otherwise specified.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  'account[default_group_storage_quota_mb]': number | string;
};

type Options = (
  | {
      path: createPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: createPathParameters;
    }
) &
  (
    | {
        query?: Partial<createSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<createSearchParameters>;
        body?: Partial<createFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<createFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: createSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: createSearchParameters;
          }
      ) &
        (
          | {
              body: createFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: createFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Create a new sub-account
 *
 * Add a new sub-account to a given account.
 *
 * Nickname: create_new_sub_account
 */
export async function create(options: Options) {
  const response = await client().fetchAs<Account>(
    `/api/v1/accounts/{account_id}/sub_accounts`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
