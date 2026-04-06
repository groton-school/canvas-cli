import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { CalendarEvent } from '../../../Resources/CalendarEvents.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
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
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<getSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: getSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: getSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Get a single calendar event or assignment
 *
 * Returns detailed information about a specific calendar event or assignment.
 *
 * Nickname: get_single_calendar_event_or_assignment
 */
export async function get(options: Options) {
  const response = await client().fetchAs<CalendarEvent>(
    `/api/v1/calendar_events/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
