import { client } from '../../../../../../Client.js';

export type retrieve_captured_eventsPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  quiz_id: string;
  /** ID */
  id: string;
};

export type retrieve_captured_eventsSearchParameters = Partial<{
  /**
   * The specific submission attempt to look up the events for. If
   * unspecified, the latest attempt will be used.
   *
   * Format: 'int64'
   */
  attempt: number;
}>;

type Options = {
  pathParams: retrieve_captured_eventsPathParameters;
} & (
  | {
      searchParams?: Partial<retrieve_captured_eventsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: retrieve_captured_eventsSearchParameters;
      strict: true;
    }
);

/**
 * Retrieve captured events
 *
 * Retrieve the set of events captured during a specific submission attempt.
 *
 * Nickname: retrieve_captured_events
 */
export async function retrieve_captured_events(options: Options) {
  return await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/quizzes/{quiz_id}/submissions/{id}/events`,
    {
      method: 'GET',
      ...options
    }
  );
}
