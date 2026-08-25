import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type listSearchParameters = Masquerade;

type Options =
  | {
      query?: Partial<listSearchParameters>;
      /** @deprecated Use {@link Options.query} */
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | ((
      | {
          query: listSearchParameters;
        }
      | {
          /** @deprecated Use {@link Options.query} */
          searchParams: listSearchParameters;
        }
    ) & {
      strict: true;
    });

/**
 * List upcoming assignments, calendar events
 *
 * A paginated list of the current user's upcoming events.
 *
 * nickname: list_upcoming_assignments_calendar_events
 *
 *
 *
 *
 */
export async function list(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/users/self/upcoming_events`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
