import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
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

type Options = (
  | {
      path: show_conversationPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: show_conversationPathParameters;
    }
) &
  (
    | {
        query?: Partial<show_conversationSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<show_conversationSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: show_conversationSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: show_conversationSearchParameters;
          }
      ) & {
        strict: true;
      })
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
