import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
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

type Options = (
  | {
      path: post_message_to_conversationPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: post_message_to_conversationPathParameters;
    }
) &
  (
    | {
        query?: Partial<post_message_to_conversationSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<post_message_to_conversationSearchParameters>;
        body?: Partial<post_message_to_conversationFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<post_message_to_conversationFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: post_message_to_conversationSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: post_message_to_conversationSearchParameters;
          }
      ) &
        (
          | {
              body: post_message_to_conversationFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: post_message_to_conversationFormParameters;
            }
        ) & {
          strict: true;
        })
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
