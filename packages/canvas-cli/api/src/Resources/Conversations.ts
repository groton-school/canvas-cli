export type Conversation = {
  /**
   * The unique identifier for the conversation.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  id: number | string;
  /** The subject of the conversation. */
  subject: string;
  /** The current state of the conversation (read, unread or archived). */
  workflow_state: string;
  /** A <=100 character preview from the most recent message. */
  last_message: string;
  /**
   * The date and time at which the last message was sent.
   *
   * Format: date-time
   */
  start_at: string;
  /**
   * The number of messages in the conversation.
   *
   * Type: integer
   */
  message_count: number | string;
  /**
   * Whether the current user is subscribed to the conversation.
   *
   * Type: boolean
   */
  subscribed: boolean | string;
  /**
   * Whether the conversation is private.
   *
   * Type: boolean
   */
  private: boolean | string;
  /**
   * Whether the conversation is starred.
   *
   * Type: boolean
   */
  starred: boolean | string;
  /**
   * Additional conversation flags (last_author, attachments, media_objects).
   * Each listed property means the flag is set to true (i.e. the current user
   * is the most recent author, there are attachments, or there are media
   * objects)
   */
  properties: string[];
  /**
   * Array of user ids who are involved in the conversation, ordered by
   * participation level, then alphabetical. Excludes current user, unless this
   * is a monologue.
   */
  audience: number | string[];
  /**
   * Most relevant shared contexts (courses and groups) between current user and
   * other participants. If there is only one participant, it will also include
   * that user's enrollment(s)/ membership type(s) in each course/group.
   */
  audience_contexts: string[];
  /**
   * URL to appropriate icon for this conversation (custom, individual or group
   * avatar, depending on audience).
   */
  avatar_url: string;
  /** Array of users participating in the conversation. Includes current user. */
  participants: ConversationParticipant[];
  /**
   * Indicates whether the conversation is visible under the current scope and
   * filter. This attribute is always true in the index API response, and is
   * primarily useful in create/update responses so that you can know if the
   * record should be displayed in the UI. The default scope is assumed, unless
   * a scope or filter is passed to the create/update API call.
   *
   * Type: boolean
   */
  visible: boolean | string;
  /** Name of the course or group in which the conversation is occurring. */
  context_name: string;
};

export type ConversationParticipant = {
  /**
   * The user ID for the participant.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  id: number | string;
  /**
   * A short name the user has selected, for use in conversations or other less
   * formal places through the site.
   */
  name: string;
  /** The full name of the user. */
  full_name: string;
  /**
   * If requested, this field will be included and contain a url to retrieve the
   * user's avatar.
   */
  avatar_url: string;
};
