import { client } from '../../../../Client.js';
import { Account } from '../../../../Resources/Accounts.js';

export type createPathParameters = {
  /** ID */
  account_id: string;
};

export type createFormParameters = {
  /** The name of the new sub-account. */
  'account[name]': string;
  /** The account's identifier in the Student Information System. */
  'account[sis_account_id]': string;
  /**
   * The default course storage quota to be used, if not otherwise specified.
   *
   * Format: 'int64'
   */
  'account[default_storage_quota_mb]': number;
  /**
   * The default user storage quota to be used, if not otherwise specified.
   *
   * Format: 'int64'
   */
  'account[default_user_storage_quota_mb]': number;
  /**
   * The default group storage quota to be used, if not otherwise specified.
   *
   * Format: 'int64'
   */
  'account[default_group_storage_quota_mb]': number;
};

type Options = {
  pathParams: createPathParameters;
} & (
  | {
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      params: createFormParameters;
      strict: true;
    }
);

/**
 * Create a new sub-account
 *
 * Add a new sub-account to a given account.
 *
 * Nickname: create_new_sub_account
 */
export async function create(options: Options) {
  return await client().fetchAs<Account>(
    `/api/v1/accounts/{account_id}/sub_accounts`,
    {
      method: 'POST',
      ...options
    }
  );
}
