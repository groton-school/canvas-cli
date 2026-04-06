import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { LtiRegistration } from '../../../../Resources/LtiRegistrations.js';

export type delete_lti_registrationPathParameters = {
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

export type delete_lti_registrationSearchParameters = Masquerade;

type Options = (
  | {
      path: delete_lti_registrationPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_lti_registrationPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_lti_registrationSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<delete_lti_registrationSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<delete_lti_registrationSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: delete_lti_registrationSearchParameters;
        strict: true;
      }
  );

/**
 * Delete an LTI Registration
 *
 * Remove the specified LTI registration
 *
 * Nickname: delete_lti_registration
 */
export async function delete_lti_registration(options: Options) {
  const response = await client().fetchAs<LtiRegistration>(
    `/api/v1/accounts/{account_id}/lti_registrations/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
