import { client } from '../../../../../Client.js';
import { LtiRegistration } from '../../../../../Resources/LtiRegistrations.js';

export type reset_lti_registration_to_defaultsPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: reset_lti_registration_to_defaultsPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
  return await client().fetchAs<LtiRegistration>(
    `/api/v1/accounts/{account_id}/lti_registrations/{id}/reset`,
    {
      method: 'PUT',
      ...options
    }
  );
}
