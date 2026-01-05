import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { ObjectHashwithidandmessagesarrayoremptyobjectifnoactiveconversation } from '../../../../../Overrides.js';

export type getPathParameters = {
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

export type getSearchParameters = Masquerade;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    }
);

/**
 * Get active conversation
 *
 * Get the active conversation for the current user and AI experience
 *
 * Nickname: get_active_conversation
 */
export async function get(options: Options) {
  const response =
    await client().fetchAs<ObjectHashwithidandmessagesarrayoremptyobjectifnoactiveconversation>(
      `/api/v1/courses/{course_id}/ai_experiences/{ai_experience_id}/conversations`,
      {
        method: 'GET',
        ...options
      }
    );
  return response;
}
