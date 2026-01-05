import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { AiExperience } from '../../../../Resources/AiExperiences.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * Only return experiences with the specified workflow state. Allowed
     * values: published, unpublished, deleted
     */
    workflow_state: string;
  }>;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    }
);

/**
 * List AI experiences
 *
 * Retrieve the paginated list of AI experiences for a course
 *
 * Nickname: list_ai_experiences
 */
export async function list(options: Options) {
  const response = await client().fetchAs<AiExperience[]>(
    `/api/v1/courses/{course_id}/ai_experiences`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
