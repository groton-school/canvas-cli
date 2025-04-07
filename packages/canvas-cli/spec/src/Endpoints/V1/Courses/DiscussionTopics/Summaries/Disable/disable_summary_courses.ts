type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Disable summary
 *
 * Disables the summary for a discussion topic.
 *
 * Nickname: disable_summary_courses
 */
export async function disable_summary_courses({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(
      `/v1/courses/{course_id}/discussion_topics/{topic_id}/summaries/disable`,
      { method: 'PUT', body: parameters }
    )
  ).json();
}
