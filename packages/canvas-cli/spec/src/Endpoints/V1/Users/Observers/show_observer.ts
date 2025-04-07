import { User } from '../../../../Resources/Users.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
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
export async function show_observer({ parameters }: Options): Promise<User> {
  return await (
    await fetch(`/v1/users/{user_id}/observers/{observer_id}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
