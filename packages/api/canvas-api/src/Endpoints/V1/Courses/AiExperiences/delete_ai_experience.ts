import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { AiExperience } from '../../../../Resources/AiExperiences.js';

export type delete_ai_experiencePathParameters = {
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

export type delete_ai_experienceSearchParameters = Masquerade;

type Options = {
  pathParams: delete_ai_experiencePathParameters;
} & (
  | {
      searchParams?: Partial<delete_ai_experienceSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_ai_experienceSearchParameters;
      strict: true;
    }
);

/**
 * Delete an AI experience
 *
 * Delete an AI experience (soft delete - marks as deleted)
 *
 * Nickname: delete_ai_experience
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
