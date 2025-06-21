import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { FeatureFlag } from '../../../../../Resources/FeatureFlags.js';

export type set_feature_flag_accountsPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
  /** ID */
  feature: string;
};

export type set_feature_flag_accountsSearchParameters = Masquerade;

export type set_feature_flag_accountsFormParameters = Masquerade & {
  /**
   * "off":: The feature is not available for the course, user, or account and
   * sub-accounts. "allowed":: (valid only on accounts) The feature is off in
   * the account, but may be enabled in sub-accounts and courses by setting a
   * feature flag on the sub-account or course. "on":: The feature is turned
   * on unconditionally for the user, course, or account and sub-accounts.
   */
  state: string;
};

type Options = {
  pathParams: set_feature_flag_accountsPathParameters;
} & (
  | {
      searchParams?: Partial<set_feature_flag_accountsSearchParameters>;
      params?: Partial<set_feature_flag_accountsFormParameters>;
      strict?: false;
    }
  | {
      searchParams: set_feature_flag_accountsSearchParameters;
      params: set_feature_flag_accountsFormParameters;
      strict: true;
    }
);

/**
 * Set feature flag
 *
 * Set a feature flag for a given Account, Course, or User. This call will fail
 * if a parent account sets a feature flag for the same feature in any state
 * other than "allowed".
 *
 * Nickname: set_feature_flag_accounts
 */
export async function set_feature_flag_accounts(options: Options) {
  const response = await client().fetchAs<FeatureFlag>(
    `/api/v1/accounts/{account_id}/features/flags/{feature}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
