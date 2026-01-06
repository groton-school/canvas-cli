import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { LtiOverlayVersion } from '../../../../../Resources/LtiRegistrations.js';

export type getPathParameters = {
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

export type getSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * The maximum number of history items to return. Defaults to 10. Maximum
     * allowed is 100.
     *
     * Type: integer
     *
     * Format: 'int64'
     */
    limit: number | string;
  }>;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    }
);

/**
 * Get LTI Registration Overlay History
 *
 * Returns the overlay history items for the specified LTI registration.
 *
 * Nickname: get_lti_registration_overlay_history
 */
export async function get(options: Options) {
  const response = await client().fetchAs<LtiOverlayVersion[]>(
    `/api/v1/accounts/{account_id}/lti_registrations/{id}/overlay_history`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
