import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type submit_captured_eventsPathParameters = {
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

export type submit_captured_eventsSearchParameters = Masquerade;

export type submit_captured_eventsFormParameters = Masquerade & {
  /**
   * The submission events to be recorded
   *
   *
   *
   *
   */
  quiz_submission_events: string[];
};

type Options = (
  | {
      path: submit_captured_eventsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: submit_captured_eventsPathParameters;
    }
) &
  (
    | {
        query?: Partial<submit_captured_eventsSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<submit_captured_eventsSearchParameters>;
        body?: Partial<submit_captured_eventsFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<submit_captured_eventsFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: submit_captured_eventsSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: submit_captured_eventsSearchParameters;
          }
      ) &
        (
          | {
              body: submit_captured_eventsFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: submit_captured_eventsFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Submit captured events
 *
 * Store a set of events which were captured during a quiz taking session.

On success, the response will be 204 No Content with an empty body.
 *
 * nickname: submit_captured_events
 *
 * 
 *
 * 
 */
export async function submit_captured_events(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/quizzes/{quiz_id}/submissions/{id}/events`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
