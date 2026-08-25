import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type summary_feedback_groupsPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  group_id: string | number;
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

export type summary_feedback_groupsSearchParameters = Masquerade;

export type summary_feedback_groupsFormParameters = Masquerade & {
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
      path: summary_feedback_groupsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: summary_feedback_groupsPathParameters;
    }
) &
  (
    | {
        query?: Partial<summary_feedback_groupsSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<summary_feedback_groupsSearchParameters>;
        body?: Partial<summary_feedback_groupsFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<summary_feedback_groupsFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: summary_feedback_groupsSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: summary_feedback_groupsSearchParameters;
          }
      ) &
        (
          | {
              body: summary_feedback_groupsFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: summary_feedback_groupsFormParameters;
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
 * nickname: summary_feedback_groups
 *
 *
 *
 *
 */
export async function summary_feedback_groups(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/groups/{group_id}/discussion_topics/{topic_id}/summaries/{summary_id}/feedback`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
