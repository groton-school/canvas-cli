import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
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

type Options = (
  | {
      path: reset_lti_registration_to_defaultsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: reset_lti_registration_to_defaultsPathParameters;
    }
) &
  (
    | {
        query?: Partial<reset_lti_registration_to_defaultsSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<reset_lti_registration_to_defaultsSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<reset_lti_registration_to_defaultsSearchParameters>;
        /** @deprecated Use {Options.query} */
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
