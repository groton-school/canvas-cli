import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { AiExperience } from '../../../../Resources/AiExperiences.js';

export type show_ai_experiencePathParameters = {
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

export type show_ai_experienceSearchParameters = Masquerade;

type Options = (
  | {
      path: show_ai_experiencePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: show_ai_experiencePathParameters;
    }
) &
  (
    | {
        query?: Partial<show_ai_experienceSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<show_ai_experienceSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: show_ai_experienceSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: show_ai_experienceSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Show an AI experience
 *
 * Retrieve an AI experience by ID
 *
 * nickname: show_ai_experience
 *
 *
 *
 *
 */
export async function show_ai_experience(options: Options) {
  const response = await client().fetchAs<AiExperience>(
    `/api/v1/courses/{course_id}/ai_experiences/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
