import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { DateTime } from '../../../../../Overrides.js';

export type createPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /**
   * Events will be created for the course section specified by
   * course_section_id. If not present, events will be created for the entire
   * course.
   */
  course_section_id: string;
  /** An array of event objects to use. */
  events: string[];
  /** Start time for the event */
  'events[start_at]': DateTime[];
  /** End time for the event */
  'events[end_at]': DateTime[];
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
  pathParams: createPathParameters;
} & (
  | {
      searchParams?: Partial<createSearchParameters>;
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      searchParams: createSearchParameters;
      params: createFormParameters;
      strict: true;
    }
);

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
export async function create(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/calendar_events/timetable_events`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
