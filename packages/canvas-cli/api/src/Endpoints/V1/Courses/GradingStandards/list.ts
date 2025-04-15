import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { GradingStandard } from '../../../../Resources/GradingStandards.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
};

export type listSearchParameters = Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * List the grading standards available in a context.
 *
 * Returns the paginated list of grading standards for the given context that
 * are visible to the user.
 *
 * Nickname: list_grading_standards_available_in_context_courses
 */
export async function list(options: Options) {
  return await client().fetchAs<GradingStandard[]>(
    `/api/v1/courses/{course_id}/grading_standards`,
    {
      method: 'GET',
      ...options
    }
  );
}
