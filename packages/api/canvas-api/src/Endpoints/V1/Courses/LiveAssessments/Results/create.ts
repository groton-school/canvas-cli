import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';

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
  assessment_id: string | number;
};

export type createSearchParameters = Masquerade;

type Options = {
  pathParams: createPathParameters;
} & (
  | {
      searchParams?: Partial<createSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: createSearchParameters;
      strict: true;
    }
);

/**
 * Create live assessment results
 *
 * Creates live assessment results and adds them to a live assessment
 *
 * Nickname: create_live_assessment_results
 */
export async function create(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/live_assessments/{assessment_id}/results`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
