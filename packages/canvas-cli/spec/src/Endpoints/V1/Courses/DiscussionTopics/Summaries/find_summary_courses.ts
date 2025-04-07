type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Find Summary
 *
 * Returns the last generated summary for a discussion topic and the current
 * user
 *
 * Nickname: find_summary_courses
 */
export async function find_summary_courses({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(
      `/v1/courses/{course_id}/discussion_topics/{topic_id}/summaries`,
      { method: 'GET', body: parameters }
    )
  ).json();
}
