import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { User } from '../../../../Resources/Users.js';

export type show_observeePathParameters = {
  /** ID */
  user_id: string;
  /** ID */
  observee_id: string;
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
