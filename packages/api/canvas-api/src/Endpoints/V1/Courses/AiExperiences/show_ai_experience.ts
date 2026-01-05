import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { AiExperience } from '../../../../Resources/AiExperiences.js';

export type show_ai_experiencePathParameters = {
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

export type show_ai_experienceSearchParameters = Masquerade;

type Options = {
  pathParams: show_ai_experiencePathParameters;
} & (
  | {
      searchParams?: Partial<show_ai_experienceSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: show_ai_experienceSearchParameters;
      strict: true;
    }
);

/**
 * Show an AI experience
 *
 * Retrieve an AI experience by ID
 *
 * Nickname: show_ai_experience
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
