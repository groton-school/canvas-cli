import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { BlackoutDate } from '../../../../Resources/BlackoutDates.js';

export type createPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  account_id: string | number;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /**
   * The start date of the blackout date.
   *
   * format: date
   *
   *
   */
  start_date: string;
  /**
   * The end date of the blackout date.
   *
   * format: date
   *
   *
   */
  end_date: string;
  /**
   * The title of the blackout date.
   *
   *
   *
   *
   */
  event_title: string;
};

type Options = (
  | {
      path: createPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: createPathParameters;
    }
) &
  (
    | {
        query?: Partial<createSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<createSearchParameters>;
        body?: Partial<createFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<createFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: createSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: createSearchParameters;
          }
      ) &
        (
          | {
              body: createFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: createFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Create Blackout Date
 *
 * Create a blackout date for the given context.
 *
 * nickname: create_blackout_date_accounts
 *
 *
 *
 *
 */
export async function create(options: Options) {
  const response = await client().fetchAs<BlackoutDate>(
    `/api/v1/accounts/{account_id}/blackout_dates`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
