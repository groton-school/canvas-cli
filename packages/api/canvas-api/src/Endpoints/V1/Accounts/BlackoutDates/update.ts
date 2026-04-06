import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { BlackoutDate } from '../../../../Resources/BlackoutDates.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /**
   * The start date of the blackout date.
   *
   * Format: date
   */
  start_date: string;
  /**
   * The end date of the blackout date.
   *
   * Format: date
   */
  end_date: string;
  /** The title of the blackout date. */
  event_title: string;
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
 * Update Blackout Date
 *
 * Update a blackout date for the given context.
 *
 * Nickname: update_blackout_date_accounts
 */
export async function update(options: Options) {
  const response = await client().fetchAs<BlackoutDate>(
    `/api/v1/accounts/{account_id}/blackout_dates/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
