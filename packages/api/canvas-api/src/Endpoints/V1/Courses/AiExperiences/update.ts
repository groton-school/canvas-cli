import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { AiExperience } from '../../../../Resources/AiExperiences.js';

export type updatePathParameters = {
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

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /** The title of the AI experience. */
  title: string;
  /** The description of the AI experience. */
  description: string;
  /** The AI facts for the experience. */
  facts: string;
  /** The learning objectives for this experience. */
  learning_objective: string;
  /** The pedagogical guidance for the experience. */
  pedagogical_guidance: string;
  /** The state of the experience. Allowed values: published, unpublished */
  workflow_state: string;
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      searchParams?: Partial<updateSearchParameters>;
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      searchParams: updateSearchParameters;
      params: updateFormParameters;
      strict: true;
    }
);

/**
 * Update an AI experience
 *
 * Update an existing AI experience
 *
 * Nickname: update_ai_experience
 */
export async function update(options: Options) {
  const response = await client().fetchAs<AiExperience>(
    `/api/v1/courses/{course_id}/ai_experiences/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
