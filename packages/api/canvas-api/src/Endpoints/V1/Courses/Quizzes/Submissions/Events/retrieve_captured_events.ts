import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type retrieve_captured_eventsPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  course_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  quiz_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  id: string | number;
};

export type retrieve_captured_eventsSearchParameters = Masquerade &
  Partial<{
    /**
     * The specific submission attempt to look up the events for. If unspecified,
the latest attempt will be used.
     *
     * type: integer

format: 'int64'
     *
     * 
     */
    attempt: number | string;
  }>;

type Options = (
  | {
      path: retrieve_captured_eventsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: retrieve_captured_eventsPathParameters;
    }
) &
  (
    | {
        query?: Partial<retrieve_captured_eventsSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<retrieve_captured_eventsSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: retrieve_captured_eventsSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: retrieve_captured_eventsSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Retrieve captured events
 *
 * Retrieve the set of events captured during a specific submission attempt.
 *
 * nickname: retrieve_captured_events
 *
 *
 *
 *
 */
export async function retrieve_captured_events(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/quizzes/{quiz_id}/submissions/{id}/events`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
