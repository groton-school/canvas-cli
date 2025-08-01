import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { User } from '../../../../Resources/Users.js';

export type add_observeePathParameters = {
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

export type add_observeeSearchParameters = Masquerade;

export type add_observeeFormParameters = Masquerade & {
  /**
   * The ID for the root account to associate with the observation link. If
   * not specified, a link will be created for each root account associated to
   * both the observer and observee.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  root_account_id: number | string;
};

type Options = {
  pathParams: add_observeePathParameters;
} & (
  | {
      searchParams?: Partial<add_observeeSearchParameters>;
      params?: Partial<add_observeeFormParameters>;
      strict?: false;
    }
  | {
      searchParams: add_observeeSearchParameters;
      params: add_observeeFormParameters;
      strict: true;
    }
);

/**
 * Add an observee
 *
 * Registers a user as being observed by the given user.
 *
 * Nickname: add_observee
 */
export async function add_observee(options: Options) {
  const response = await client().fetchAs<User>(
    `/api/v1/users/{user_id}/observees/{observee_id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
