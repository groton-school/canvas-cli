import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { User } from '../../../../Resources/Users.js';

export type add_observeePathParameters = {
  /** ID */
  user_id: string;
  /** ID */
  observee_id: string;
};

export type add_observeeSearchParameters = Masquerade;

export type add_observeeFormParameters = Masquerade & {
  /**
   * The ID for the root account to associate with the observation link. If
   * not specified, a link will be created for each root account associated to
   * both the observer and observee.
   *
   * Format: 'int64'
   */
  root_account_id: number;
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
