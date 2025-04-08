import { JSONObject } from '@battis/typescript-tricks';
import { ContentExport } from './ContentExports.js';

/** Content shared between users */
export type ContentShare = {
  /**
   * The id of the content share for the current user
   *
   * Type: integer
   */
  id: number;
  /** The name of the shared content */
  name: string;
  /**
   * The type of content that was shared. Can be assignment, discussion_topic,
   * page, quiz, module, or module_item.
   */
  content_type: string;
  /**
   * The datetime the content was shared with this user.
   *
   * Format: date-time
   */
  created_at: string;
  /**
   * The datetime the content was updated.
   *
   * Format: date-time
   */
  updated_at: string;
  /**
   * The id of the user who sent or received the content share.
   *
   * Type: integer
   */
  user_id: number;
  /**
   * The user who shared the content. This field is provided only to receivers;
   * it is not populated in the sender's list of sent content shares.
   *
   * Object
   */
  sender: JSONObject;
  /**
   * An Array of users the content is shared with. This field is provided only
   * to senders; an empty array will be returned for the receiving users.
   */
  receivers: string[];
  /**
   * The course the content was originally shared from.
   *
   * Object
   */
  source_course: JSONObject;
  /** Whether the recipient has viewed the content share. */
  read_state: string;
  /** The content export record associated with this content share */
  content_export: ContentExport;
};
