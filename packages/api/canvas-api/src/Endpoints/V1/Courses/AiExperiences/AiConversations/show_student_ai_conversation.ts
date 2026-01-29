import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { AiConversation } from '../../../../../Overrides.js';

export type show_student_ai_conversationPathParameters = {
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
  id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  conversation_id: string | number;
};

export type show_student_ai_conversationSearchParameters = Masquerade;

type Options = {
  pathParams: show_student_ai_conversationPathParameters;
} & (
  | {
      searchParams?: Partial<show_student_ai_conversationSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: show_student_ai_conversationSearchParameters;
      strict: true;
    }
);

/**
 * Show student AI conversation
 *
 * Retrieve a specific student's AI conversation with full message history. Only
 * available to teachers and course managers.
 *
 * Nickname: show_student_ai_conversation
 */
export async function show_student_ai_conversation(options: Options) {
  const response = await client().fetchAs<AiConversation>(
    `/api/v1/courses/{course_id}/ai_experiences/{id}/ai_conversations/{conversation_id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
