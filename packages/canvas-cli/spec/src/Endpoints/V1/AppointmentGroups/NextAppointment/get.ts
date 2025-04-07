import { CalendarEvent } from '../../../../Resources/CalendarEvents.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get next appointment
 *
 * Return the next appointment available to sign up for. The appointment is
 * returned in a one-element array. If no future appointments are available, an
 * empty array is returned.
 *
 * Nickname: get_next_appointment
 */
export async function get({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/appointment_groups/next_appointment`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
