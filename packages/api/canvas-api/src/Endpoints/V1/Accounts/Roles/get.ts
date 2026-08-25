import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { Role } from '../../../../Resources/Roles.js';

export type getPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  id: string | number;
  /**
   * The id of the account containing the role
   *
   * type: string
   *
   *
   */
  account_id: string | number;
};

export type getSearchParameters = Masquerade &
  Partial<{
    /**
     * The unique identifier for the role
     *
     * type: integer

format: 'int64'
     *
     * 
     */
    role_id: number | string;
    /**
     * The name for the role
     *
     *
     *
     *
     */
    role: string;
  }>;

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
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<getSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: getSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: getSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Get a single role
 *
 * Retrieve information about a single role
 *
 * nickname: get_single_role
 *
 *
 *
 *
 */
export async function get(options: Options) {
  const response = await client().fetchAs<Role>(
    `/api/v1/accounts/{account_id}/roles/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
