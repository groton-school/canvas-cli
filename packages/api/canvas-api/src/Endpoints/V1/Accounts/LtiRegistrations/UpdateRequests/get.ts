import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { LtiRegistrationUpdateRequest } from '../../../../../Overrides.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
  /**
   * The id of the registration.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  id: number | string;
  /**
   * The id of the registration update request to retrieve.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  update_request_id: number | string;
};

export type getSearchParameters = Masquerade;

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
 * Get LTI Registration Update Request
 *
 * Retrieves details about a specific registration update request.
 *
 * Nickname: get_lti_registration_update_request
 */
export async function get(options: Options) {
  const response = await client().fetchAs<LtiRegistrationUpdateRequest>(
    `/api/v1/accounts/{account_id}/lti_registrations/{id}/update_requests/{update_request_id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
