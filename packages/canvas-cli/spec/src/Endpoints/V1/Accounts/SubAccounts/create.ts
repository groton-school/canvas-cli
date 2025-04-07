import { Account } from '../../../../Resources/Accounts.js';

type Parameters = {
  /** The name of the new sub-account. */
  'account[name]': string;
  /** The account's identifier in the Student Information System. */
  'account[sis_account_id]': string;
  /**
   * The default course storage quota to be used, if not otherwise specified.
   *
   * Format: int64
   */
  'account[default_storage_quota_mb]': number;
  /**
   * The default user storage quota to be used, if not otherwise specified.
   *
   * Format: int64
   */
  'account[default_user_storage_quota_mb]': number;
  /**
   * The default group storage quota to be used, if not otherwise specified.
   *
   * Format: int64
   */
  'account[default_group_storage_quota_mb]': number;
};

type Options = {
  parameters: Parameters;
};

/**
 * Create a new sub-account
 *
 * Add a new sub-account to a given account.
 *
 * Nickname: create_new_sub_account
 */
export async function create({ parameters }: Options): Promise<Account> {
  return await (
    await fetch(`/v1/accounts/{account_id}/sub_accounts`, {
      method: 'POST',
      body: parameters
    })
  ).json();
}
