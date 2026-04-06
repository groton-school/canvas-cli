import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type listSearchParameters = Masquerade;

type Options =
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    };

/**
 * List upcoming assignments, calendar events
 *
 * A paginated list of the current user's upcoming events.
 *
 * Nickname: list_upcoming_assignments_calendar_events
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
