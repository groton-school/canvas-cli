import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { ObjectSuccessmessage } from '../../../../../Overrides.js';

export type delete_ai_conversationPathParameters = {
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

export type delete_ai_conversationSearchParameters = Masquerade;

type Options = {
  pathParams: delete_ai_conversationPathParameters;
} & (
  | {
      searchParams?: Partial<delete_ai_conversationSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_ai_conversationSearchParameters;
      strict: true;
    }
);

/**
 * Delete AI conversation
 *
 * Mark a conversation as completed/deleted
 *
 * Nickname: delete_ai_conversation
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
