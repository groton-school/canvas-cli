import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  communication_channel_id: string | number;
  /**
   * The name of the category. Must be parameterized (e.g. The category
   * "Course Content" should be "course_content")
   */
  category: string;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /** The desired frequency for each notification in the category */
  'notification_preferences[frequency]': string;
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
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<updateSearchParameters>;
        body?: Partial<updateFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<updateFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: updateSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: updateSearchParameters;
          }
      ) &
        (
          | {
              body: updateFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: updateFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Update preferences by category
 *
 * Change the preferences for multiple notifications based on the category for a
 * single communication channel
 *
 * Nickname: update_preferences_by_category
 */
export async function update(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/users/self/communication_channels/{communication_channel_id}/notification_preference_categories/{category}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
