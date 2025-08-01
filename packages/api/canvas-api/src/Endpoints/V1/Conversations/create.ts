import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../Client.js';

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /**
   * An array of recipient ids. These may be user ids or course/group ids
   * prefixed with "course_" or "group_" respectively, e.g.
   * recipients[]=1&recipients[]=2&recipients[]=course_3. If the course/group
   * has over 100 enrollments, 'bulk_message' and 'group_conversation' must be
   * set to true.
   */
  recipients: string[];
  /**
   * The subject of the conversation. This is ignored when reusing a
   * conversation. Maximum length is 255 characters.
   */
  subject: string;
  /** The message to be sent */
  body: string;
  /**
   * Forces a new message to be created, even if there is an existing private
   * conversation.
   *
   * Type: boolean
   */
  force_new: boolean | string;
  /**
   * Defaults to false. When false, individual private conversations will be
   * created with each recipient. If true, this will be a group conversation
   * (i.e. all recipients may see all messages and replies). Must be set true
   * if the number of recipients is over the set maximum (default is 100).
   *
   * Type: boolean
   */
  group_conversation: boolean | string;
  /**
   * An array of attachments ids. These must be files that have been
   * previously uploaded to the sender's "conversation attachments" folder.
   */
  attachment_ids: string[];
  /**
   * Media comment id of an audio or video file to be associated with this
   * message.
   */
  media_comment_id: string;
  /** Type of the associated media file */
  media_comment_type: string;
  /**
   * Determines whether the messages will be created/sent synchronously or
   * asynchronously. Defaults to sync, and this option is ignored if this is a
   * group conversation or there is just one recipient (i.e. it must be a bulk
   * private message). When sent async, the response will be an empty array
   * (batch status can be queried via the {api:ConversationsController#batches
   * batches API})
   */
  mode: string;
  /**
   * Used when generating "visible" in the API response. See the explanation
   * under the {api:ConversationsController#index index API action}
   */
  scope: string;
  /**
   * Used when generating "visible" in the API response. See the explanation
   * under the {api:ConversationsController#index index API action}
   */
  filter: string[];
  /**
   * Used when generating "visible" in the API response. See the explanation
   * under the {api:ConversationsController#index index API action}
   */
  filter_mode: string;
  /**
   * The course or group that is the context for this conversation. Same
   * format as courses or groups in the recipients argument.
   */
  context_code: string;
};

type Options =
  | {
      searchParams?: Partial<createSearchParameters>;
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      searchParams: createSearchParameters;
      params: createFormParameters;
      strict: true;
    };

/**
 * Create a conversation
 *
 * Create a new conversation with one or more recipients. If there is already an
 * existing private conversation with the given recipients, it will be reused.
 *
 * Nickname: create_conversation
 */
export async function create(options: Options) {
  const response = await client().fetchAs<void>(`/api/v1/conversations`, {
    method: 'POST',
    ...options
  });
  return response;
}
