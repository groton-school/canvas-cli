import { client, Masquerade, Paginated } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { AiConversation } from '../../../../../Overrides.js';

export type listPathParameters = {
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
};

export type listSearchParameters = Masquerade & Paginated;

type Options = (
  | {
      path: listPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: listPathParameters;
    }
) &
  (
    | {
        query?: Partial<listSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<listSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<listSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: listSearchParameters;
        strict: true;
      }
  );

/**
 * List student AI conversations
 *
 * Retrieve the latest AI conversation for each student in the course for this
 * AI experience. Only available to teachers and course managers.
 *
 * Nickname: list_student_ai_conversations
 */
export async function list(options: Options) {
  const response = await client().fetchAs<AiConversation[]>(
    `/api/v1/courses/{course_id}/ai_experiences/{id}/ai_conversations`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
