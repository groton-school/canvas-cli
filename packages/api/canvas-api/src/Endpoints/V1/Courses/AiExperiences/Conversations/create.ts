import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
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

type Options = (
  | {
      path: createPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: createPathParameters;
    }
) &
  (
    | {
        query?: Partial<createSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<createSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<createSearchParameters>;
        /** @deprecated Use {Options.query} */
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
