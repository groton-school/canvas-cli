import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { ObjectHashwithconversation_idandinitialmessagesarray } from '../../../../../Overrides.js';

export type createPathParameters = {
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
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<createSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: createSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: createSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Create AI conversation
 *
 * Initialize a new conversation with the AI experience
 *
 * nickname: create_ai_conversation
 *
 *
 *
 *
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
