import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade, Paginated } from '#client';
import { Role } from '../../../../Resources/Roles.js';

export type listPathParameters = {
  /**
   * The id of the account to retrieve roles for.
   *
   * type: string
   *
   *
   */
  account_id: string | number;
};

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * Filter by role state. If this argument is omitted, only &#x27;active&#x27; roles are
returned.
     *
     * 
     *
     * 
     */
    state: string[];
    /**
     * If this argument is true, all roles inherited from parent accounts will
be included.
     *
     * type: boolean
     *
     * 
     */
    show_inherited: boolean | string;
  }>;

type Options = (
  | {
      path: listPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: listPathParameters;
    }
) &
  (
    | {
        query?: Partial<listSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<listSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: listSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: listSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * List roles
 *
 * A paginated list of the roles available to an account.
 *
 * nickname: list_roles
 *
 *
 *
 *
 */
export async function list(options: Options) {
  const response = await client().fetchAs<Role[]>(
    `/api/v1/accounts/{account_id}/roles`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
