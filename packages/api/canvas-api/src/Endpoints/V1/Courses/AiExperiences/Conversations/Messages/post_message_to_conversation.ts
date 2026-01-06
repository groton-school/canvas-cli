import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../../Client.js';
import { ObjectHashwithidandupdatedmessagesarray } from '../../../../../../Overrides.js';

export type post_message_to_conversationPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  ai_experience_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type post_message_to_conversationSearchParameters = Masquerade;

export type post_message_to_conversationFormParameters = Masquerade & {
  /** The user's message to send to the AI */
  message: string;
};

type Options = {
  pathParams: post_message_to_conversationPathParameters;
} & (
  | {
      searchParams?: Partial<post_message_to_conversationSearchParameters>;
      params?: Partial<post_message_to_conversationFormParameters>;
      strict?: false;
    }
  | {
      searchParams: post_message_to_conversationSearchParameters;
      params: post_message_to_conversationFormParameters;
      strict: true;
    }
);

/**
 * Post message to conversation
 *
 * Send a message to an existing conversation and get the AI response
 *
 * Nickname: post_message_to_conversation
 */
export async function post_message_to_conversation(options: Options) {
  const response =
    await client().fetchAs<ObjectHashwithidandupdatedmessagesarray>(
      `/api/v1/courses/{course_id}/ai_experiences/{ai_experience_id}/conversations/{id}/messages`,
      {
        method: 'POST',
        ...options
      }
    );
  return response;
}
