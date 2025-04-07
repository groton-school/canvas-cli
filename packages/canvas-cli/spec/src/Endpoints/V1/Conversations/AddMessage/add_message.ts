type Parameters = {
  /** The message to be sent. */
  body: string;
  /**
   * An array of attachments ids. These must be files that have been
   * previously uploaded to the sender's "conversation attachments" folder.
   */
  attachment_ids: string[];
  /**
   * Media comment id of an audio of video file to be associated with this
   * message.
   */
  media_comment_id: string;
  /** Type of the associated media file. */
  media_comment_type: string;
  /** No description */
  recipients: string[];
  /** No description */
  included_messages: string[];
};

type Options = {
  parameters: Parameters;
};

/**
 * Add a message
 *
 * Add a message to an existing conversation. Response is similar to the
 * GET/show action, except that only includes the latest message (i.e. what we
 * just sent)
 *
 * An array of user ids. Defaults to all of the current conversation recipients.
 * To explicitly send a message to no other recipients, this array should
 * consist of the logged-in user id.
 *
 * An array of message ids from this conversation to send to recipients of the
 * new message. Recipients who already had a copy of included messages will not
 * be affected.
 *
 * Nickname: add_message
 */
export async function add_message({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/conversations/{id}/add_message`, {
      method: 'POST',
      body: parameters
    })
  ).json();
}
