import { client, Masquerade, Paginated } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { LtiRegistrationHistoryEntry } from '../../../../../Overrides.js';

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

export type getSearchParameters = Masquerade & Paginated;

type Options = (
  | {
      path: getPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: getPathParameters;
    }
) &
  (
    | {
        query?: Partial<getSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<getSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: getSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: getSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Get LTI Registration History
 *
 * Returns the history entries for the specified LTI registration. This endpoint
 * provides comprehensive change tracking for all fields associated with the
 * registration, including registration fields, developer key changes, internal
 * configuration changes, and overlay changes. Supports pagination using the
 * `page` and `per_page` parameters. The default page size is 10.
 *
 * Nickname: get_lti_registration_history
 */
export async function get(options: Options) {
  const response = await client().fetchAs<LtiRegistrationHistoryEntry[]>(
    `/api/v1/accounts/{account_id}/lti_registrations/{id}/history`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
