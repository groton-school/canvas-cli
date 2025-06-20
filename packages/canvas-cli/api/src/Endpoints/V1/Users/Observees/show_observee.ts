import { client } from '../../../../Client.js';
import { User } from '../../../../Resources/Users.js';

export type show_observeePathParameters = {
  /** ID */
  user_id: string;
  /** ID */
  observee_id: string;
};

type Options = {
  pathParams: show_observeePathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
