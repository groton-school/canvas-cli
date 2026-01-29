import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { ObjectHashwithconversationdetailsincludingmessages } from '../../../../../Overrides.js';

export type show_conversationPathParameters = {
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

export type show_conversationSearchParameters = Masquerade;

type Options = {
  pathParams: show_conversationPathParameters;
} & (
  | {
      searchParams?: Partial<show_conversationSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: show_conversationSearchParameters;
      strict: true;
    }
);

/**
 * Show conversation
 *
 * Get a specific conversation by ID (for teachers viewing student
 * conversations)
 *
 * Nickname: show_conversation
 */
export async function show_conversation(options: Options) {
  const response =
    await client().fetchAs<ObjectHashwithconversationdetailsincludingmessages>(
      `/api/v1/courses/{course_id}/ai_experiences/{ai_experience_id}/conversations/{id}`,
      {
        method: 'GET',
        ...options
      }
    );
  return response;
}
