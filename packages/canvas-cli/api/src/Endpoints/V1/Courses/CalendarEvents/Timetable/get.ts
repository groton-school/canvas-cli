import { client } from '../../../../../Client.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Get course timetable
 *
 * Returns the last timetable set by the
 * {api:CalendarEventsApiController#set_course_timetable Set a course timetable}
 * endpoint
 *
 * Nickname: get_course_timetable
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/calendar_events/timetable`,
    {
      method: 'GET',
      pathParams
    }
  );
}
