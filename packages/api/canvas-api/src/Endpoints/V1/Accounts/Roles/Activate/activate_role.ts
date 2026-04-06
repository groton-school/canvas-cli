import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { Role } from '../../../../../Resources/Roles.js';

export type activate_rolePathParameters = {
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

export type activate_roleSearchParameters = Masquerade;

export type activate_roleFormParameters = Masquerade & {
  /**
   * The unique identifier for the role
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  role_id: number | string;
  /**
   * The name for the role
   *
   * @deprecated
   */
  role: string;
};

type Options = (
  | {
      path: activate_rolePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: activate_rolePathParameters;
    }
) &
  (
    | {
        query?: Partial<activate_roleSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<activate_roleSearchParameters>;
        body?: Partial<activate_roleFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<activate_roleFormParameters>;
        strict?: false;
      }
    | {
        query?: Partial<activate_roleSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: activate_roleSearchParameters;
        body?: Partial<activate_roleFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params: activate_roleFormParameters;
        strict: true;
      }
  );

/**
 * Activate a role
 *
 * Re-activates an inactive role (allowing it to be assigned to new users)
 *
 * Nickname: activate_role
 */
export async function activate_role(options: Options) {
  const response = await client().fetchAs<Role>(
    `/api/v1/accounts/{account_id}/roles/{id}/activate`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
