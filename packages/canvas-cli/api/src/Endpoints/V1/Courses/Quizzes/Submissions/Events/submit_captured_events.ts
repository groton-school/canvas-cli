import { client } from '../../../../../../Client.js';

export type submit_captured_eventsPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  quiz_id: string;
  /** ID */
  id: string;
};

export type submit_captured_eventsFormParameters = {
  /** The submission events to be recorded */
  quiz_submission_events: string[];
};

type Options = {
  pathParams: submit_captured_eventsPathParameters;
} & (
  | {
      params?: Partial<submit_captured_eventsFormParameters>;
      strict?: false;
    }
  | {
      params: submit_captured_eventsFormParameters;
      strict: true;
    }
);

/**
 * Submit captured events
 *
 * Store a set of events which were captured during a quiz taking session.
 *
 * On success, the response will be 204 No Content with an empty body.
 *
 * Nickname: submit_captured_events
 */
export async function submit_captured_events(options: Options) {
  return await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/quizzes/{quiz_id}/submissions/{id}/events`,
    {
      method: 'POST',
      ...options
    }
  );
}
