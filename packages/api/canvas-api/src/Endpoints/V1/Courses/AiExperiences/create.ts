import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { AiExperience } from '../../../../Resources/AiExperiences.js';

export type createPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
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
  /**
   * The initial state of the experience. Defaults to 'unpublished'. Allowed
   * values: published, unpublished
   */
  workflow_state: string;
};

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
        body?: Partial<createFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<createFormParameters>;
        strict?: false;
      }
    | {
        query?: Partial<createSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: createSearchParameters;
        body?: Partial<createFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params: createFormParameters;
        strict: true;
      }
  );

/**
 * Create an AI experience
 *
 * Create a new AI experience for the specified course
 *
 * Nickname: create_ai_experience
 */
export async function create(options: Options) {
  const response = await client().fetchAs<AiExperience>(
    `/api/v1/courses/{course_id}/ai_experiences`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
