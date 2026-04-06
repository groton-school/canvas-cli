import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { User } from '../../../../Resources/Users.js';

export type remove_observeePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  observee_id: string | number;
};

export type remove_observeeSearchParameters = Masquerade &
  Partial<{
    /**
     * If specified, only removes the link for the given root account
     *
     * Type: integer
     *
     * Format: 'int64'
     */
    root_account_id: number | string;
  }>;

type Options = (
  | {
      path: remove_observeePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: remove_observeePathParameters;
    }
) &
  (
    | {
        query?: Partial<remove_observeeSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<remove_observeeSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<remove_observeeSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: remove_observeeSearchParameters;
        strict: true;
      }
  );

/**
 * Remove an observee
 *
 * Unregisters a user as being observed by the given user.
 *
 * Nickname: remove_observee
 */
export async function remove_observee(options: Options) {
  const response = await client().fetchAs<User>(
    `/api/v1/users/{user_id}/observees/{observee_id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
