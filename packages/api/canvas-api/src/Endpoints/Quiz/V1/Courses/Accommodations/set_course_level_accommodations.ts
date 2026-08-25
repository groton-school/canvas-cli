import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { AccommodationResponse } from '../../../../../Resources/NewQuizzesAccommodations.js';

export type set_course_level_accommodationsPathParameters = {
  /**
   * The ID of the course where accommodations should be applied.
   *
   * type: string
   *
   *
   */
  course_id: string | number;
};

export type set_course_level_accommodationsSearchParameters = Masquerade;

export type set_course_level_accommodationsFormParameters = Masquerade & {
  /**
     * The Canvas user ID of the student receiving accommodations.
     *
     * type: integer

format: 'int64'
     *
     * 
     */
  user_id: number | string;
  /**
     * Amount of extra time in &lt;b&gt;minutes&lt;/b&gt; granted for quiz submission.
Allowed range: 0 to 10080 minutes (168 hours).
     *
     * type: integer

format: 'int64'
     *
     * 
     */
  extra_time: number | string;
  /**
   * If &#x27;true&#x27;, applies the accommodation to currently &lt;b&gt;in-progress&lt;/b&gt; quiz sessions.
   *
   * type: boolean
   *
   *
   */
  apply_to_in_progress_quiz_sessions: boolean | string;
  /**
   * If &#x27;true&#x27;, removes &lt;b&gt;one incorrect answer&lt;/b&gt; from multiple-choice questions with &lt;b&gt;4 or more options&lt;/b&gt;.
   *
   * type: boolean
   *
   *
   */
  reduce_choices_enabled: boolean | string;
};

type Options = (
  | {
      path: set_course_level_accommodationsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: set_course_level_accommodationsPathParameters;
    }
) &
  (
    | {
        query?: Partial<set_course_level_accommodationsSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<set_course_level_accommodationsSearchParameters>;
        body?: Partial<set_course_level_accommodationsFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<set_course_level_accommodationsFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: set_course_level_accommodationsSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: set_course_level_accommodationsSearchParameters;
          }
      ) &
        (
          | {
              body: set_course_level_accommodationsFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: set_course_level_accommodationsFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Set Course-Level Accommodations
 *
 * Apply accommodations at the <b>course level</b> for students enrolled in a given course.

<b>Request Body Format:</b>
  [{
    "user_id": 3,
    "extra_time": 60,
    "apply_to_in_progress_quiz_sessions": true,
    "reduce_choices_enabled": true
  }]

<b>Responses</b>

* <code>200 OK</code>: Accommodations were processed with some successes and failures
* <code>401 Unauthorized</code>: User does not have permission to update accommodations
* <code>404 Not Found</code>: The course was not found
* <code>400 Bad Request</code>: Validation error (e.g., invalid JSON, missing user IDs)
 *
 * nickname: set_course_level_accommodations
 *
 * 
 *
 * 
 */
export async function set_course_level_accommodations(options: Options) {
  const response = await client().fetchAs<AccommodationResponse>(
    `/api/quiz/v1/courses/{course_id}/accommodations`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
