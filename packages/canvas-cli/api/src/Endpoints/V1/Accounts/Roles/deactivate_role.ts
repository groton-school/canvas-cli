import { client } from '../../../../Client.js';
import { Role } from '../../../../Resources/Roles.js';

export type deactivate_rolePathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

export type deactivate_roleSearchParameters = {
  /**
   * The unique identifier for the role
   *
   * Format: 'int64'
   */
  role_id: number;
  /** The name for the role */
  role: string;
};

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
export async function deactivate_role({ pathParams, searchParams }: Options) {
  return await client().fetchAs<Role>(`/v1/accounts/{account_id}/roles/{id}`, {
    method: 'DELETE',
    pathParams,
    searchParams
  });
}
