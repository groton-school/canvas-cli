type Parameters = {
  /**
   * Whether sub-accounts and courses will be prevented from overriding
   * settings inherited from this account.
   */
  settings_locked: boolean;
};

type Options = {
  parameters: Parameters;
};

/**
 * Lock or unlock current CSP settings for sub-accounts and courses
 *
 * Can only be set if CSP is explicitly enabled or disabled on this account
 * (i.e. "inherited" is false).
 *
 * Nickname: lock_or_unlock_current_csp_settings_for_sub_accounts_and_courses
 */
export async function lock_or_unlock_current_csp_settings_for_sub_accounts_and_courses({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/accounts/{account_id}/csp_settings/lock`, {
      method: 'PUT',
      body: parameters
    })
  ).json();
}
