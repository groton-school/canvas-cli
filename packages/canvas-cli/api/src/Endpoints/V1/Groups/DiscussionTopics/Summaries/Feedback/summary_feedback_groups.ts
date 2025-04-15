import { client } from '../../../../../../Client.js';

export type summary_feedback_groupsPathParameters = {
  /** ID */
  group_id: string;
  /** ID */
  topic_id: string;
  /** ID */
  summary_id: string;
};

export type summary_feedback_groupsFormParameters = {
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

type Options = {
  pathParams: summary_feedback_groupsPathParameters;
} & (
  | {
      params?: Partial<summary_feedback_groupsFormParameters>;
      strict?: false;
    }
  | {
      params: summary_feedback_groupsFormParameters;
      strict: true;
    }
);

/**
 * Summary Feedback
 *
 * Persists feedback on a discussion topic summary.
 *
 * Nickname: summary_feedback_groups
 */
export async function summary_feedback_groups(options: Options) {
  return await client().fetchAs<void>(
    `/api/v1/groups/{group_id}/discussion_topics/{topic_id}/summaries/{summary_id}/feedback`,
    {
      method: 'POST',
      ...options
    }
  );
}
