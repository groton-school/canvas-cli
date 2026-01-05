import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { LtiRegistrationAccountBinding } from '../../../../../Overrides.js';

export type bind_lti_registration_to_accountPathParameters = {
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

export type bind_lti_registration_to_accountSearchParameters = Masquerade;

export type bind_lti_registration_to_accountFormParameters = Masquerade & {
  /**
   * The desired state for this registration/account binding. "allow" is only
   * valid for Site Admin registrations.
   */
  workflow_state: string;
};

type Options = {
  pathParams: bind_lti_registration_to_accountPathParameters;
} & (
  | {
      searchParams?: Partial<bind_lti_registration_to_accountSearchParameters>;
      params?: Partial<bind_lti_registration_to_accountFormParameters>;
      strict?: false;
    }
  | {
      searchParams: bind_lti_registration_to_accountSearchParameters;
      params: bind_lti_registration_to_accountFormParameters;
      strict: true;
    }
);

/**
 * Bind an LTI Registration to an Account
 *
 * Enable or disable the specified LTI registration for the specified account.
 * To enable an inherited registration (eg from Site Admin), pass the
 * registration's global ID.
 *
 * Only allowed for root accounts.
 *
 * <b>Specifics for Site Admin:</b> "on" enables and locks the registration on
 * for all root accounts. "off" disables and hides the registration for all root
 * accounts. "allow" makes the registration visible to all root accounts, but
 * accounts must bind it to use it.
 *
 * <b>Specifics for centrally-managed/federated consortia:</b> Child root
 * accounts may only bind registrations created in the same account. For parent
 * root account, binding also applies to all child root accounts.
 *
 * Nickname: bind_lti_registration_to_account
 */
export async function bind_lti_registration_to_account(options: Options) {
  const response = await client().fetchAs<LtiRegistrationAccountBinding>(
    `/api/v1/accounts/{account_id}/lti_registrations/{id}/bind`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
