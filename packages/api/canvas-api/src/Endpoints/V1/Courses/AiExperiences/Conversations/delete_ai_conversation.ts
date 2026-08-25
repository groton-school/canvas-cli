import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { ObjectSuccessmessage } from '../../../../../Overrides.js';

export type delete_ai_conversationPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  course_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  ai_experience_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  id: string | number;
};

export type delete_ai_conversationSearchParameters = Masquerade;

type Options = (
  | {
      path: delete_ai_conversationPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_ai_conversationPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_ai_conversationSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<delete_ai_conversationSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: delete_ai_conversationSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: delete_ai_conversationSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Delete AI conversation
 *
 * Mark a conversation as completed/deleted
 *
 * nickname: delete_ai_conversation
 *
 *
 *
 *
 */
export async function delete_ai_conversation(options: Options) {
  const response = await client().fetchAs<ObjectSuccessmessage>(
    `/api/v1/courses/{course_id}/ai_experiences/{ai_experience_id}/conversations/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
