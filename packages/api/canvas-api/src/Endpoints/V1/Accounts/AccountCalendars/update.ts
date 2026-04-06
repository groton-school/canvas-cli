import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
};

export type updateSearchParameters = Masquerade;

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
      ) & {
        strict: true;
      })
  );

/**
 * Update several calendars
 *
 * Set visibility and/or auto_subscribe on many calendars simultaneously.
 * Requires the `manage_account_calendar_visibility` permission on the account.
 *
 * Accepts a JSON array of objects containing 2-3 keys each: `id` (the account's
 * id, required), `visible` (a boolean indicating whether the account calendar
 * is visible), and `auto_subscribe` (a boolean indicating whether users should
 * see these events in their calendar without manually subscribing).
 *
 * Returns the count of updated accounts.
 *
 * Nickname: update_several_calendars
 */
export async function update(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/accounts/{account_id}/account_calendars`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
