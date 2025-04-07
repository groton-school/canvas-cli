type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get current settings for account or course
 *
 * Update multiple modules in an account.
 *
 * Nickname: get_current_settings_for_account_or_course_accounts
 */
export async function get({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/accounts/{account_id}/csp_settings`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
