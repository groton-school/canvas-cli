import { Deprecated } from '';
import { client } from '../../../../../Client.js';
import { Role } from '../../../../../Resources/Roles.js';

type activate_rolePathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

type activate_roleFormParameters = {
  /**
   * The unique identifier for the role
   *
   * Format: 'int64'
   */
  role_id: number;
  /** The name for the role */
  role: Deprecated;
};

type Options = {
  pathParams: activate_rolePathParameters;
  params?: activate_roleFormParameters;
};

/**
 * Activate a role
 *
 * Re-activates an inactive role (allowing it to be assigned to new users)
 *
 * Nickname: activate_role
 */
export async function activate_role({ pathParams, params }: Options) {
  return await client().fetchAs<Role>(
    `/v1/accounts/{account_id}/roles/{id}/activate`,
    {
      method: 'POST',
      pathParams,
      params
    }
  );
}
