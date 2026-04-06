import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
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

type Options = (
  | {
      path: getPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: getPathParameters;
    }
) &
  (
    | {
        query?: Partial<getSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<getSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<getSearchParameters>;
        /** @deprecated Use {Options.query} */
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
