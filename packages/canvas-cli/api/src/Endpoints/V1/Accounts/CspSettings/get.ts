import { client } from '../../../../Client.js';

export type getPathParameters = {
  /** ID */
  account_id: string;
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Get current settings for account or course
 *
 * Update multiple modules in an account.
 *
 * Nickname: get_current_settings_for_account_or_course_accounts
 */
export async function get(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/accounts/{account_id}/csp_settings`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
