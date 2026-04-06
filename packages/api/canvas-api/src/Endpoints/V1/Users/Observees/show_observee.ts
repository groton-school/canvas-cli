import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
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

type Options = (
  | {
      path: show_observeePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: show_observeePathParameters;
    }
) &
  (
    | {
        query?: Partial<show_observeeSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<show_observeeSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: show_observeeSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: show_observeeSearchParameters;
          }
      ) & {
        strict: true;
      })
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
