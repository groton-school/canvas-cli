import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { AiExperience } from '../../../../Resources/AiExperiences.js';

export type delete_ai_experiencePathParameters = {
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
  id: string | number;
};

export type delete_ai_experienceSearchParameters = Masquerade;

type Options = (
  | {
      path: delete_ai_experiencePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_ai_experiencePathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_ai_experienceSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<delete_ai_experienceSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: delete_ai_experienceSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: delete_ai_experienceSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Delete an AI experience
 *
 * Delete an AI experience (soft delete - marks as deleted)
 *
 * nickname: delete_ai_experience
 *
 *
 *
 *
 */
export async function delete_ai_experience(options: Options) {
  const response = await client().fetchAs<AiExperience>(
    `/api/v1/courses/{course_id}/ai_experiences/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
