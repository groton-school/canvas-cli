import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';

export type set_course_timetablePathParameters = {
  /** ID */
  course_id: string;
};

export type set_course_timetableSearchParameters = Masquerade;

export type set_course_timetableFormParameters = Masquerade & {
  /**
   * An array of timetable objects for the course section specified by
   * course_section_id. If course_section_id is set to "all", events will be
   * created for the entire course.
   */
  'timetables[course_section_id]': string[];
  /**
   * A comma-separated list of abbreviated weekdays (Mon-Monday, Tue-Tuesday,
   * Wed-Wednesday, Thu-Thursday, Fri-Friday, Sat-Saturday, Sun-Sunday)
   */
  'timetables[course_section_id][weekdays]': string[];
  /** Time to start each event at (e.g. "9:00 am") */
  'timetables[course_section_id][start_time]': string[];
  /** Time to end each event at (e.g. "9:00 am") */
  'timetables[course_section_id][end_time]': string[];
  /** A location name to set for each event */
  'timetables[course_section_id][location_name]': string[];
};

type Options = {
  pathParams: set_course_timetablePathParameters;
} & (
  | {
      searchParams?: Partial<set_course_timetableSearchParameters>;
      params?: Partial<set_course_timetableFormParameters>;
      strict?: false;
    }
  | {
      searchParams: set_course_timetableSearchParameters;
      params: set_course_timetableFormParameters;
      strict: true;
    }
);

/**
 * Set a course timetable
 *
 * Creates and updates "timetable" events for a course. Can automaticaly
 * generate a series of calendar events based on simple schedules (e.g. "Monday
 * and Wednesday at 2:00pm" )
 *
 * Existing timetable events for the course and course sections will be updated
 * if they still are part of the timetable. Otherwise, they will be deleted.
 *
 * Nickname: set_course_timetable
 */
export async function set_course_timetable(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/calendar_events/timetable`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
