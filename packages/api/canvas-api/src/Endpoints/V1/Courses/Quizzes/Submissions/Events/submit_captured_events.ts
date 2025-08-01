import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../../Client.js';

export type submit_captured_eventsPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  quiz_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type submit_captured_eventsSearchParameters = Masquerade;

export type submit_captured_eventsFormParameters = Masquerade & {
  /** The submission events to be recorded */
  quiz_submission_events: string[];
};

type Options = {
  pathParams: submit_captured_eventsPathParameters;
} & (
  | {
      searchParams?: Partial<submit_captured_eventsSearchParameters>;
      params?: Partial<submit_captured_eventsFormParameters>;
      strict?: false;
    }
  | {
      searchParams: submit_captured_eventsSearchParameters;
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
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/quizzes/{quiz_id}/submissions/{id}/events`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
