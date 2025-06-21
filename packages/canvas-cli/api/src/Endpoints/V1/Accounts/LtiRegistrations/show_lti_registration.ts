import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { LtiRegistration } from '../../../../Resources/LtiRegistrations.js';

export type show_lti_registrationPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
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

type Options = {
  pathParams: show_lti_registrationPathParameters;
} & (
  | {
      searchParams?: Partial<show_lti_registrationSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: show_lti_registrationSearchParameters;
      strict: true;
    }
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
