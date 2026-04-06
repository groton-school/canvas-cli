import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type updatePathParameters = {
  /** ID */
  type: string;
  /** ID */
  address: string;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /** The desired frequency for <X> notification */
  'notification_preferences[<X>][frequency]': string;
};

type Options = (
  | {
      path: updatePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: updatePathParameters;
    }
) &
  (
    | {
        query?: Partial<updateSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<updateSearchParameters>;
        body?: Partial<updateFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<updateFormParameters>;
        strict?: false;
      }
    | {
        query?: Partial<updateSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: updateSearchParameters;
        body?: Partial<updateFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params: updateFormParameters;
        strict: true;
      }
  );

/**
 * Update multiple preferences
 *
 * Change the preferences for multiple notifications for a single communication
 * channel at once
 *
 * Nickname: update_multiple_preferences_type
 */
export async function update(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/users/self/communication_channels/{type}/{address}/notification_preferences`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
