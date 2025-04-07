type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete a calendar event
 *
 * Delete an event from the calendar and return the deleted event
 *
 * Nickname: delete_calendar_event
 */
export async function delete_calendar_event({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/calendar_events/{id}`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
