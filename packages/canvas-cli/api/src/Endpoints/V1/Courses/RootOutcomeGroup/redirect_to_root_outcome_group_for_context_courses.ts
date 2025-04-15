import { client } from '../../../../Client.js';

export type redirect_to_root_outcome_group_for_context_coursesPathParameters = {
  /** ID */
  course_id: string;
};

type Options = {
  pathParams: redirect_to_root_outcome_group_for_context_coursesPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
  return await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/root_outcome_group`,
    {
      method: 'GET',
      ...options
    }
  );
}
