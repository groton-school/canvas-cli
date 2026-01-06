import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { User } from '../../../../Resources/Users.js';

export type show_observerPathParameters = {
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
  observer_id: string | number;
};

export type show_observerSearchParameters = Masquerade;

type Options = {
  pathParams: show_observerPathParameters;
} & (
  | {
      searchParams?: Partial<show_observerSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: show_observerSearchParameters;
      strict: true;
    }
);

/**
 * Show an observer
 *
 * Gets information about an observer.
 *
 * Note:* all users are allowed to view their own observers.
 *
 * Nickname: show_observer
 */
export async function show_observer(options: Options) {
  const response = await client().fetchAs<User>(
    `/api/v1/users/{user_id}/observers/{observer_id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
