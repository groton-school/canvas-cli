import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { Role } from '../../../../Resources/Roles.js';

export type deactivate_rolePathParameters = {
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

export type deactivate_roleSearchParameters = Masquerade &
  Partial<{
    /**
     * The unique identifier for the role
     *
     * Type: integer
     *
     * Format: 'int64'
     */
    role_id: number | string;
    /** The name for the role */
    role: string;
  }>;

type Options = {
  pathParams: deactivate_rolePathParameters;
} & (
  | {
      searchParams?: Partial<deactivate_roleSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: deactivate_roleSearchParameters;
      strict: true;
    }
);

/**
 * Deactivate a role
 *
 * Deactivates a custom role. This hides it in the user interface and prevents
 * it from being assigned to new users. Existing users assigned to the role will
 * continue to function with the same permissions they had previously. Built-in
 * roles cannot be deactivated.
 *
 * Nickname: deactivate_role
 */
export async function deactivate_role(options: Options) {
  const response = await client().fetchAs<Role>(
    `/api/v1/accounts/{account_id}/roles/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
