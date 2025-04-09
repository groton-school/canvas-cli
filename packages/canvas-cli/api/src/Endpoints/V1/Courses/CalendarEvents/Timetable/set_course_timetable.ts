import { client } from '../../../../../Client.js';

type set_course_timetablePathParameters = {
  /** ID */
  course_id: string;
};

type set_course_timetableFormParameters = {
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
  params?: set_course_timetableFormParameters;
};

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
export async function set_course_timetable({ pathParams, params }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/calendar_events/timetable`,
    {
      method: 'POST',
      pathParams,
      params
    }
  );
}
