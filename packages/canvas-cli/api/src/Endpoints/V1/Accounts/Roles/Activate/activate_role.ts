import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { Role } from '../../../../../Resources/Roles.js';

export type activate_rolePathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

export type activate_roleSearchParameters = Masquerade;

export type activate_roleFormParameters = Masquerade & {
  /**
   * The unique identifier for the role
   *
   * Format: 'int64'
   */
  role_id: number;
  /**
   * The name for the role
   *
   * @deprecated
   */
  role: string;
};

type Options = {
  pathParams: activate_rolePathParameters;
} & (
  | {
      searchParams?: Partial<activate_roleSearchParameters>;
      params?: Partial<activate_roleFormParameters>;
      strict?: false;
    }
  | {
      searchParams: activate_roleSearchParameters;
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
