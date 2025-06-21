import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  assessment_id: string;
};

export type listSearchParameters = Masquerade &
  Partial<{
    /**
     * If set, restrict results to those for this user
     *
     * Format: 'int64'
     */
    user_id: number;
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
 * List live assessment results
 *
 * Returns a paginated list of live assessment results
 *
 * Nickname: list_live_assessment_results
 */
export async function list(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/live_assessments/{assessment_id}/results`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
