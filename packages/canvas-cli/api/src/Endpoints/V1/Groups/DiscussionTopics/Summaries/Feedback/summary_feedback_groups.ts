import { client } from '../../../../../../Client.js';

type Parameters = {
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
  parameters: Parameters;
};

/**
 * Summary Feedback
 *
 * Persists feedback on a discussion topic summary.
 *
 * Nickname: summary_feedback_groups
 */
export async function summary_feedback_groups({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/groups/{group_id}/discussion_topics/{topic_id}/summaries/{summary_id}/feedback`,
    { method: 'POST', params: parameters }
  );
}
