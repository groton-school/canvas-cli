import { client } from '../../../Client.js';

export type delete_calendar_eventPathParameters = {
  /** ID */
  id: string;
};

export type delete_calendar_eventSearchParameters = Partial<{
  /** Reason for deleting/canceling the event. */
  cancel_reason: string;
  /**
   * Valid if the event whose ID is in the URL is part of a series. Delete
   * just the event whose ID is in in the URL, all events in the series, or
   * the given event and all those following.
   */
  which: string;
}>;

type Options = {
  pathParams: delete_calendar_eventPathParameters;
} & (
  | {
      searchParams?: Partial<delete_calendar_eventSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_calendar_eventSearchParameters;
      strict: true;
    }
);

/**
 * Delete a calendar event
 *
 * Delete an event from the calendar and return the deleted event
 *
 * Nickname: delete_calendar_event
 */
export async function delete_calendar_event(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/calendar_events/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
