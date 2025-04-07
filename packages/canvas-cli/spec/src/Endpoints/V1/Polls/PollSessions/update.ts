type Parameters = {
  /**
   * The id of the course this session is associated with.
   *
   * Format: int64
   */
  'poll_sessions[course_id]': string[];
  /**
   * The id of the course section this session is associated with.
   *
   * Format: int64
   */
  'poll_sessions[course_section_id]': string[];
  /** Whether or not results are viewable by students. */
  'poll_sessions[has_public_results]': string[];
};

type Options = {
  parameters: Parameters;
};

/**
 * Update a single poll session
 *
 * Update an existing poll session for this poll
 *
 * Nickname: update_single_poll_session
 */
export async function update({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/polls/{poll_id}/poll_sessions/{id}`, {
      method: 'PUT',
      body: parameters
    })
  ).json();
}
