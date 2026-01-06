import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { ObjectHashwithconversation_idandinitialmessagesarray } from '../../../../../Overrides.js';

export type createPathParameters = {
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
};

export type createSearchParameters = Masquerade;

type Options = {
  pathParams: createPathParameters;
} & (
  | {
      searchParams?: Partial<createSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: createSearchParameters;
      strict: true;
    }
);

/**
 * Create AI conversation
 *
 * Initialize a new conversation with the AI experience
 *
 * Nickname: create_ai_conversation
 */
export async function create(options: Options) {
  const response =
    await client().fetchAs<ObjectHashwithconversation_idandinitialmessagesarray>(
      `/api/v1/courses/{course_id}/ai_experiences/{ai_experience_id}/conversations`,
      {
        method: 'POST',
        ...options
      }
    );
  return response;
}
