import { client, Masquerade, Paginated } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { BlackoutDateTheresultwhichshouldmatchtheinputwithmaybesomedifferentIDs } from '../../../../Overrides.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type updateSearchParameters = Masquerade & Paginated;

export type updateFormParameters = Masquerade & {
  /**
   * [blackout_date, ...] An object containing the array of BlackoutDates we
   * want to exist after this operation. For array entries, if it has an id it
   * will be updated, if not created, and if an existing BlackoutDate id is
   * missing from the array, it will be deleted.
   */
  'blackout_dates:': string;
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
    | ((
        | {
            query: updateSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
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
 * Update a list of Blackout Dates
 *
 * Create, update, and delete blackout dates to sync the db with the incoming
 * data.
 *
 * Nickname: update_list_of_blackout_dates
 */
export async function update(options: Options) {
  const response = await client().fetchAs<
    BlackoutDateTheresultwhichshouldmatchtheinputwithmaybesomedifferentIDs[]
  >(`/api/v1/courses/{course_id}/blackout_dates`, {
    method: 'PUT',
    ...options
  });
  return response;
}
