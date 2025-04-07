type Parameters = {
  /**
   * A rating to set on this entry. Only 0 and 1 are accepted.
   *
   * Format: int64
   */
  rating: number;
};

type Options = {
  parameters: Parameters;
};

/**
 * Rate entry
 *
 * Rate a discussion entry.
 *
 * On success, the response will be 204 No Content with an empty body.
 *
 * Nickname: rate_entry_courses
 */
export async function rate_entry_courses({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(
      `/v1/courses/{course_id}/discussion_topics/{topic_id}/entries/{entry_id}/rating`,
      { method: 'POST', body: parameters }
    )
  ).json();
}
