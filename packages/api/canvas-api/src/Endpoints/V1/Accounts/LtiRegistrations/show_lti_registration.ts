import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { LtiRegistration } from '../../../../Resources/LtiRegistrations.js';

export type show_lti_registrationPathParameters = {
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

export type show_lti_registrationSearchParameters = Masquerade &
  Partial<{
    /**
     * Array of additional data to include. Always includes [account_binding
     * configuration].
     *
     * "account_binding":: the registration's binding to the given account
     * "configuration":: the registration's Canvas-style tool configuration,
     * without any overlays applied. "overlaid_configuration":: the
     * registration's Canvas-style tool configuration, with all overlays
     * applied. "overlaid_legacy_configuration":: the registration's
     * legacy-style configuration, with all overlays applied. "overlay":: the
     * registration's admin-defined configuration overlay "overlay_versions"::
     * the registration's overlay's edit history
     */
    include: string[];
  }>;

type Options = (
  | {
      path: show_lti_registrationPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: show_lti_registrationPathParameters;
    }
) &
  (
    | {
        query?: Partial<show_lti_registrationSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<show_lti_registrationSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: show_lti_registrationSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: show_lti_registrationSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Show an LTI Registration
 *
 * Return details about the specified LTI registration, including the
 * configuration and account binding.
 *
 * Nickname: show_lti_registration
 */
export async function show_lti_registration(options: Options) {
  const response = await client().fetchAs<LtiRegistration>(
    `/api/v1/accounts/{account_id}/lti_registrations/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
