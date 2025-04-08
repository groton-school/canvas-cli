import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Redirect to root outcome group for context
 *
 * Convenience redirect to find the root outcome group for a particular context.
 * Will redirect to the appropriate outcome group's URL.
 *
 * Nickname: redirect_to_root_outcome_group_for_context_courses
 */
export async function redirect_to_root_outcome_group_for_context_courses({
  parameters
}: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/root_outcome_group`,
    { method: 'GET', params: parameters }
  );
}
