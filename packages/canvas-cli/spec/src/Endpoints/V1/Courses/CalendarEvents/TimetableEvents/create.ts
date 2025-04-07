import { DateTime } from '';
import { DateTime } from '';

type Parameters = {
  /**
   * Events will be created for the course section specified by
   * course_section_id. If not present, events will be created for the entire
   * course.
   */
  course_section_id: string;
  /** An array of event objects to use. */
  events: string[];
  /** Start time for the event */
  'events[start_at]': string[];
  /** End time for the event */
  'events[end_at]': string[];
  /** Location name for the event */
  'events[location_name]': string[];
  /**
   * A unique identifier that can be used to update the event at a later time
   * If one is not specified, an identifier will be generated based on the
   * start and end times
   */
  'events[code]': string[];
  /**
   * Title for the meeting. If not present, will default to the associated
   * course's name
   */
  'events[title]': string[];
};

type Options = {
  parameters: Parameters;
};

/**
 * Create or update events directly for a course timetable
 *
 * Creates and updates "timetable" events for a course or course section.
 * Similar to {api:CalendarEventsApiController#set_course_timetable setting a
 * course timetable}, but instead of generating a list of events based on a
 * timetable schedule, this endpoint expects a complete list of events.
 *
 * Nickname: create_or_update_events_directly_for_course_timetable
 */
export async function create({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/courses/{course_id}/calendar_events/timetable_events`, {
      method: 'POST',
      body: parameters
    })
  ).json();
}
