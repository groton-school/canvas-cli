import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { LtiRegistration } from '../../../../Resources/LtiRegistrations.js';

export type show_lti_registrationPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  account_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  id: string | number;
};

export type show_lti_registrationSearchParameters = Masquerade &
  Partial<{
    /**
     * Array of additional data to include. Always includes [account_binding configuration].

&quot;account_binding&quot;:: the registration&#x27;s binding to the given account
&quot;configuration&quot;:: the registration&#x27;s Canvas-style tool configuration, without any overlays applied.
&quot;overlaid_configuration&quot;:: the registration&#x27;s Canvas-style tool configuration, with all overlays applied.
&quot;overlaid_legacy_configuration&quot;:: the registration&#x27;s legacy-style configuration, with all overlays applied.
&quot;overlay&quot;:: the registration&#x27;s admin-defined configuration overlay
&quot;overlay_versions&quot;:: the registration&#x27;s overlay&#x27;s edit history
     *
     * 
     *
     * 
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
configuration and account binding.
 *
 * nickname: show_lti_registration
 *
 * 
 *
 * 
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
