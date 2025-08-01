import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { User } from '../../../../Resources/Users.js';

export type show_observeePathParameters = {
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

export type show_observeeSearchParameters = Masquerade;

type Options = {
  pathParams: show_observeePathParameters;
} & (
  | {
      searchParams?: Partial<show_observeeSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: show_observeeSearchParameters;
      strict: true;
    }
);

/**
 * Show an observee
 *
 * Gets information about an observed user.
 *
 * Note:* all users are allowed to view their own observees.
 *
 * Nickname: show_observee
 */
export async function show_observee(options: Options) {
  const response = await client().fetchAs<User>(
    `/api/v1/users/{user_id}/observees/{observee_id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
