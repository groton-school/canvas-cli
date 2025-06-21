import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
};

export type getSearchParameters = Masquerade;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
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
export async function get(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/calendar_events/timetable`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
