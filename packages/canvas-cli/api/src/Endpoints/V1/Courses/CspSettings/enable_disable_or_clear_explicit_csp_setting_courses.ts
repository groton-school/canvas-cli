import { client } from '../../../../Client.js';

export type enable_disable_or_clear_explicit_csp_setting_coursesPathParameters =
  {
    /** ID */
    course_id: string;
  };

export type enable_disable_or_clear_explicit_csp_setting_coursesFormParameters =
  {
    /**
     * If set to "enabled" for an account, CSP will be enabled for all its
     * courses and sub-accounts (that have not explicitly enabled or disabled
     * it), using the allowed domains set on this account. If set to "disabled",
     * CSP will be disabled for this account or course and for all sub-accounts
     * that have not explicitly re-enabled it. If set to "inherited", this
     * account or course will reset to the default state where CSP settings are
     * inherited from the first parent account to have them explicitly set.
     */
    status: string;
  };

type Options = {
  pathParams: enable_disable_or_clear_explicit_csp_setting_coursesPathParameters;
} & (
  | {
      params?: Partial<enable_disable_or_clear_explicit_csp_setting_coursesFormParameters>;
      strict?: false;
    }
  | {
      params: enable_disable_or_clear_explicit_csp_setting_coursesFormParameters;
      strict: true;
    }
);

/**
 * Enable, disable, or clear explicit CSP setting
 *
 * Either explicitly sets CSP to be on or off for courses and sub-accounts, or
 * clear the explicit settings to default to those set by a parent account
 *
 * Note: If "inherited" and "settings_locked" are both true for this account or
 * course, then the CSP setting cannot be modified.
 *
 * Nickname: enable_disable_or_clear_explicit_csp_setting_courses
 */
export async function enable_disable_or_clear_explicit_csp_setting_courses(
  options: Options
) {
  return await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/csp_settings`,
    {
      method: 'PUT',
      ...options
    }
  );
}
