import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';

export type redirect_to_root_outcome_group_for_context_coursesPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type redirect_to_root_outcome_group_for_context_coursesSearchParameters =
  Masquerade;

type Options = {
  pathParams: redirect_to_root_outcome_group_for_context_coursesPathParameters;
} & (
  | {
      searchParams?: Partial<redirect_to_root_outcome_group_for_context_coursesSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: redirect_to_root_outcome_group_for_context_coursesSearchParameters;
      strict: true;
    }
);

/**
 * Redirect to root outcome group for context
 *
 * Convenience redirect to find the root outcome group for a particular context.
 * Will redirect to the appropriate outcome group's URL.
 *
 * Nickname: redirect_to_root_outcome_group_for_context_courses
 */
export async function redirect_to_root_outcome_group_for_context_courses(
  options: Options
) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/root_outcome_group`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
