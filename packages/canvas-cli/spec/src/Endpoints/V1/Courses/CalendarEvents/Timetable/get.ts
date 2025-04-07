type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get course timetable
 *
 * Returns the last timetable set by the
 * {api:CalendarEventsApiController#set_course_timetable Set a course timetable}
 * endpoint
 *
 * Nickname: get_course_timetable
 */
export async function get({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/courses/{course_id}/calendar_events/timetable`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
