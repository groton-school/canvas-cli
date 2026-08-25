import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { Admin } from '../../../../Resources/Admins.js';

export type make_account_adminPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  account_id: string | number;
};

export type make_account_adminSearchParameters = Masquerade;

export type make_account_adminFormParameters = Masquerade & {
  /**
     * The id of the user to promote.
     *
     * type: integer

format: 'int64'
     *
     * 
     */
  user_id: number | string;
  /**
     * [DEPRECATED] The user&#x27;s admin relationship with the account will be
created with the given role. Defaults to &#x27;AccountAdmin&#x27;.
     *
     * 
     *
     * 
     */
  role: string;
  /**
     * The user&#x27;s admin relationship with the account will be created with the given role. Defaults to the built-in role for &#x27;AccountAdmin&#x27;.
     *
     * type: integer

format: 'int64'
     *
     * 
     */
  role_id: number | string;
  /**
     * Send a notification email to
the new admin if true. Default is true.
     *
     * type: boolean
     *
     * 
     */
  send_confirmation: boolean | string;
};

type Options = (
  | {
      path: make_account_adminPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: make_account_adminPathParameters;
    }
) &
  (
    | {
        query?: Partial<make_account_adminSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<make_account_adminSearchParameters>;
        body?: Partial<make_account_adminFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<make_account_adminFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: make_account_adminSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: make_account_adminSearchParameters;
          }
      ) &
        (
          | {
              body: make_account_adminFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: make_account_adminFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Make an account admin
 *
 * Flag an existing user as an admin within the account.
 *
 * nickname: make_account_admin
 *
 *
 *
 *
 */
export async function make_account_admin(options: Options) {
  const response = await client().fetchAs<Admin>(
    `/api/v1/accounts/{account_id}/admins`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
