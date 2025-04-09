import { client } from '../../../../Client.js';
import { User } from '../../../../Resources/Users.js';

type show_observerPathParameters = {
  /** ID */
  user_id: string;
  /** ID */
  observer_id: string;
};

type Options = {
  pathParams: show_observerPathParameters;
};

/**
 * Show an observer
 *
 * Gets information about an observer.
 *
 * Note:* all users are allowed to view their own observers.
 *
 * Nickname: show_observer
 */
export async function show_observer({ pathParams }: Options) {
  return await client().fetchAs<User>(
    `/v1/users/{user_id}/observers/{observer_id}`,
    {
      method: 'GET',
      pathParams
    }
  );
}
