import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../../Client.js';
import { LtiConfigurationOverlay } from '../../../../../../Overrides.js';
import { LtiRegistration } from '../../../../../../Resources/LtiRegistrations.js';

export type apply_lti_registration_update_requstPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
  /**
   * The id of the registration to update.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  id: number | string;
  /**
   * The id of the registration update request to apply.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  update_request_id: number | string;
};

export type apply_lti_registration_update_requstSearchParameters = Masquerade;

export type apply_lti_registration_update_requstFormParameters = Masquerade & {
  /**
   * Whether to accept (true) or reject (false) the registration update
   * request.
   *
   * Type: boolean
   */
  accepted: boolean | string;
  /** Optional overlay data to apply on top of the new configuration. */
  overlay: LtiConfigurationOverlay;
  /** Optional comment explaining the reason for applying this update. */
  comment: string;
};

type Options = {
  pathParams: apply_lti_registration_update_requstPathParameters;
} & (
  | {
      searchParams?: Partial<apply_lti_registration_update_requstSearchParameters>;
      params?: Partial<apply_lti_registration_update_requstFormParameters>;
      strict?: false;
    }
  | {
      searchParams: apply_lti_registration_update_requstSearchParameters;
      params: apply_lti_registration_update_requstFormParameters;
      strict: true;
    }
);

/**
 * Apply LTI Registration Update Requst
 *
 * Applies a registration update request to an existing registration, replacing
 * the existing configuration and overlay with the new values. If the request is
 * rejected, marks it as rejected without applying changes.
 *
 * Nickname: apply_lti_registration_update_requst
 */
export async function apply_lti_registration_update_requst(options: Options) {
  const response = await client().fetchAs<LtiRegistration>(
    `/api/v1/accounts/{account_id}/lti_registrations/{id}/update_requests/{update_request_id}/apply`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
