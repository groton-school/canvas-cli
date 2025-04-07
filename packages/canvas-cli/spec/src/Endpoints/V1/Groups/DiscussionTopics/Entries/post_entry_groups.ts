type Parameters = {
  /** The body of the entry. */
  message: string;
  /**
   * A multipart/form-data form-field-style attachment. Attachments larger
   * than 1 kilobyte are subject to quota restrictions.
   */
  attachment: string;
};

type Options = {
  parameters: Parameters;
};

/**
 * Post an entry
 *
 * Create a new entry in a discussion topic. Returns a json representation of
 * the created entry (see documentation for 'entries' method) on success.
 *
 * Nickname: post_entry_groups
 */
export async function post_entry_groups({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/groups/{group_id}/discussion_topics/{topic_id}/entries`, {
      method: 'POST',
      body: parameters
    })
  ).json();
}
