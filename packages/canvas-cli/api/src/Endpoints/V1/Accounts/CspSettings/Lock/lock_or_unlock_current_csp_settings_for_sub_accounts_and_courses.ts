import { client } from '../../../../../Client.js';

export type lock_or_unlock_current_csp_settings_for_sub_accounts_and_coursesPathParameters =
  {
    /** ID */
    account_id: string;
  };

export type lock_or_unlock_current_csp_settings_for_sub_accounts_and_coursesFormParameters =
  {
    /**
     * Whether sub-accounts and courses will be prevented from overriding
     * settings inherited from this account.
     */
    settings_locked: boolean;
  };

type Options = {
  pathParams: lock_or_unlock_current_csp_settings_for_sub_accounts_and_coursesPathParameters;
} & (
  | {
      params?: Partial<lock_or_unlock_current_csp_settings_for_sub_accounts_and_coursesFormParameters>;
      strict?: false;
    }
  | {
      params: lock_or_unlock_current_csp_settings_for_sub_accounts_and_coursesFormParameters;
      strict: true;
    }
);

/**
 * Lock or unlock current CSP settings for sub-accounts and courses
 *
 * Can only be set if CSP is explicitly enabled or disabled on this account
 * (i.e. "inherited" is false).
 *
 * Nickname: lock_or_unlock_current_csp_settings_for_sub_accounts_and_courses
 */
export async function lock_or_unlock_current_csp_settings_for_sub_accounts_and_courses(
  options: Options
) {
  return await client().fetchAs<void>(
    `/api/v1/accounts/{account_id}/csp_settings/lock`,
    {
      method: 'PUT',
      ...options
    }
  );
}
