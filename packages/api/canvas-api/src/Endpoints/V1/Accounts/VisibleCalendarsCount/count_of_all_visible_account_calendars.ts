import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type count_of_all_visible_account_calendarsPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
};

export type count_of_all_visible_account_calendarsSearchParameters = Masquerade;

type Options = (
  | {
      path: count_of_all_visible_account_calendarsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: count_of_all_visible_account_calendarsPathParameters;
    }
) &
  (
    | {
        query?: Partial<count_of_all_visible_account_calendarsSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<count_of_all_visible_account_calendarsSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: count_of_all_visible_account_calendarsSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: count_of_all_visible_account_calendarsSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Count of all visible account calendars
 *
 * Returns the number of visible account calendars.
 *
 * Nickname: count_of_all_visible_account_calendars
 */
export async function count_of_all_visible_account_calendars(options: Options) {
  const response = await client().fetchAs<{ count: number }>(
    `/api/v1/accounts/{account_id}/visible_calendars_count`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
