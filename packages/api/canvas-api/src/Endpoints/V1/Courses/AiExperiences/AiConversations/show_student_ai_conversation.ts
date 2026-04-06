import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
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

type Options = (
  | {
      path: show_student_ai_conversationPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: show_student_ai_conversationPathParameters;
    }
) &
  (
    | {
        query?: Partial<show_student_ai_conversationSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<show_student_ai_conversationSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<show_student_ai_conversationSearchParameters>;
        /** @deprecated Use {Options.query} */
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
