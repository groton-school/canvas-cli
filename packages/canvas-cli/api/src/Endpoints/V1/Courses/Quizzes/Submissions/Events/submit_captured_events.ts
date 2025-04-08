import { client } from '../../../../../../Client.js';

type Parameters = {
  /** The submission events to be recorded */
  quiz_submission_events: string[];
};

type Options = {
  parameters: Parameters;
};

/**
 * Submit captured events
 *
 * Store a set of events which were captured during a quiz taking session.
 *
 * On success, the response will be 204 No Content with an empty body.
 *
 * Nickname: submit_captured_events
 */
export async function submit_captured_events({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/quizzes/{quiz_id}/submissions/{id}/events`,
    { method: 'POST', params: parameters }
  );
}
