import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { LtiRegistration } from '../../../../Resources/LtiRegistrations.js';

export type updatePathParameters = {
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

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /** The name of the tool */
  name: string;
  /** The admin-configured friendly display name for the registration */
  admin_nickname: string;
  /** A description of the tool. Cannot exceed 2048 bytes. */
  description: string;
  /**
   * [Lti::ToolConfiguration | Lti::LegacyConfiguration] The LTI 1.3
   * configuration for the tool. Note that updating the base tool
   * configuration of a registration associated with a Dynamic Registration is
   * not allowed.
   */
  configuration: string;
  /**
   * [Lti::Overlay] The overlay configuration for the tool. Overrides values
   * in the base configuration. Note that updating the overlay of a
   * registration associated with a Dynamic Registration IS allowed.
   */
  overlay: string;
  /**
   * The desired state for this registration/account binding. "allow" is only
   * valid for Site Admin registrations.
   */
  workflow_state: string;
  /**
   * A comment explaining why this change was made. Cannot exceed 2000
   * characters.
   */
  comment: string;
};

type Options = (
  | {
      path: updatePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: updatePathParameters;
    }
) &
  (
    | {
        query?: Partial<updateSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<updateSearchParameters>;
        body?: Partial<updateFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<updateFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: updateSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: updateSearchParameters;
          }
      ) &
        (
          | {
              body: updateFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: updateFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Update an LTI Registration
 *
 * Update the specified LTI registration with the provided parameters. Note that
 * updating the base tool configuration of a registration that is associated
 * with a Dynamic Registration will return a 422. All other fields can be
 * updated freely.
 *
 * Nickname: update_lti_registration
 */
export async function update(options: Options) {
  const response = await client().fetchAs<LtiRegistration>(
    `/api/v1/accounts/{account_id}/lti_registrations/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
