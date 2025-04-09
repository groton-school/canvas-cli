import { client } from '../../../../../../Client.js';

type retrieve_captured_eventsPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  quiz_id: string;
  /** ID */
  id: string;
};

type retrieve_captured_eventsSearchParameters = {
  /**
   * The specific submission attempt to look up the events for. If
   * unspecified, the latest attempt will be used.
   *
   * Format: 'int64'
   */
  attempt: number;
};

type Options = {
  pathParams: retrieve_captured_eventsPathParameters;
  searchParams?: retrieve_captured_eventsSearchParameters;
};

/**
 * Retrieve captured events
 *
 * Retrieve the set of events captured during a specific submission attempt.
 *
 * Nickname: retrieve_captured_events
 */
export async function retrieve_captured_events({
  pathParams,
  searchParams
}: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/quizzes/{quiz_id}/submissions/{id}/events`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
