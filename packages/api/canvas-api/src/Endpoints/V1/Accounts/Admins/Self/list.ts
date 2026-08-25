import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade, Paginated } from '#client';
import { Admin } from '../../../../../Resources/Admins.js';

export type listPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  account_id: string | number;
};

export type listSearchParameters = Masquerade & Paginated;

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
 * List my admin roles
 *
 * A paginated list of the current user's roles in the account. The results are the same
as those returned by the {api:AdminsController#index List account admins} endpoint with
+user_id+ set to +self+, except the "Admins - Add / Remove" permission is not required.
 *
 * nickname: list_my_admin_roles
 *
 * 
 *
 * 
 */
export async function list(options: Options) {
  const response = await client().fetchAs<Admin[]>(
    `/api/v1/accounts/{account_id}/admins/self`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
