import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { NotificationPreference } from '../../../../../Resources/NotificationPreferences.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
  /** ID */
  type: string;
  /** ID */
  address: string;
  /** ID */
  notification: string;
};

export type getSearchParameters = Masquerade;

type Options = (
  | {
      path: getPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: getPathParameters;
    }
) &
  (
    | {
        query?: Partial<getSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<getSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<getSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: getSearchParameters;
        strict: true;
      }
  );

/**
 * Get a preference
 *
 * Fetch the preference for the given notification for the given communication
 * channel
 *
 * Nickname: get_preference_type
 */
export async function get(options: Options) {
  const response = await client().fetchAs<NotificationPreference>(
    `/api/v1/users/{user_id}/communication_channels/{type}/{address}/notification_preferences/{notification}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
