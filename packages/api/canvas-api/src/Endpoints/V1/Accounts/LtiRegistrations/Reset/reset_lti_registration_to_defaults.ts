import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { LtiRegistration } from '../../../../../Resources/LtiRegistrations.js';

export type reset_lti_registration_to_defaultsPathParameters = {
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

export type reset_lti_registration_to_defaultsSearchParameters = Masquerade;

type Options = {
  pathParams: reset_lti_registration_to_defaultsPathParameters;
} & (
  | {
      searchParams?: Partial<reset_lti_registration_to_defaultsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: reset_lti_registration_to_defaultsSearchParameters;
      strict: true;
    }
);

/**
 * Reset an LTI Registration to Defaults
 *
 * Reset the specified LTI registration to its default settings in this context.
 * This removes all customizations that were present in the overlay associated
 * with this context.
 *
 * Nickname: reset_lti_registration_to_defaults
 */
export async function reset_lti_registration_to_defaults(options: Options) {
  const response = await client().fetchAs<LtiRegistration>(
    `/api/v1/accounts/{account_id}/lti_registrations/{id}/reset`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
