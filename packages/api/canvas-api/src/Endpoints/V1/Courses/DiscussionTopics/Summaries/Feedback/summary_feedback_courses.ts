import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type summary_feedback_coursesPathParameters = {
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
  topic_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  summary_id: string | number;
};

export type summary_feedback_coursesSearchParameters = Masquerade;

export type summary_feedback_coursesFormParameters = Masquerade & {
  /**
   * Required The action to take on the summary. Possible values are:
   *
   * - "seen": Marks the summary as seen. This action saves the feedback if it's
   *   not already persisted.
   * - "like": Marks the summary as liked.
   * - "dislike": Marks the summary as disliked.
   * - "reset_like": Resets the like status of the summary.
   * - "regenerate": Regenerates the summary feedback.
   * - "disable_summary": Disables the summary feedback. Any other value will
   *   result in an error response.
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
        /** @deprecated Use {Options.query} */
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
            /** @deprecated Use {Options.query} */
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
 * Nickname: summary_feedback_courses
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
