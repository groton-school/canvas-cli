import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type summary_feedback_coursesPathParameters = {
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
  topic_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  summary_id: string | number;
};

export type summary_feedback_coursesSearchParameters = Masquerade;

export type summary_feedback_coursesFormParameters = Masquerade & {
  /**
     * Required
The action to take on the summary. Possible values are:
- &quot;seen&quot;: Marks the summary as seen. This action saves the feedback if it&#x27;s not already persisted.
- &quot;like&quot;: Marks the summary as liked.
- &quot;dislike&quot;: Marks the summary as disliked.
- &quot;reset_like&quot;: Resets the like status of the summary.
- &quot;regenerate&quot;: Regenerates the summary feedback.
- &quot;disable_summary&quot;: Disables the summary feedback.
Any other value will result in an error response.
     *
     * 
     *
     * 
     */
  _action: string;
};

type Options = (
  | {
      path: summary_feedback_coursesPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: summary_feedback_coursesPathParameters;
    }
) &
  (
    | {
        query?: Partial<summary_feedback_coursesSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<summary_feedback_coursesSearchParameters>;
        body?: Partial<summary_feedback_coursesFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<summary_feedback_coursesFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: summary_feedback_coursesSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: summary_feedback_coursesSearchParameters;
          }
      ) &
        (
          | {
              body: summary_feedback_coursesFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: summary_feedback_coursesFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Summary Feedback
 *
 * Persists feedback on a discussion topic summary.
 *
 * nickname: summary_feedback_courses
 *
 *
 *
 *
 */
export async function summary_feedback_courses(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/discussion_topics/{topic_id}/summaries/{summary_id}/feedback`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
