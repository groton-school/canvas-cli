type Parameters = {
  /** Areas or topics for the summary to focus on. */
  userInput: string;
};

type Options = {
  parameters: Parameters;
};

/**
 * Find or Create Summary
 *
 * Generates a summary for a discussion topic.
 *
 * Nickname: find_or_create_summary_courses
 */
export async function find_or_create_summary_courses({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(
      `/v1/courses/{course_id}/discussion_topics/{topic_id}/summaries`,
      { method: 'POST', body: parameters }
    )
  ).json();
}
