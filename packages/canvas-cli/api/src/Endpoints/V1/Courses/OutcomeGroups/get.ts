import { client } from '../../../../Client.js';
import { OutcomeGroup } from '../../../../Resources/OutcomeGroups.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get all outcome groups for context
 *
 * Nickname: get_all_outcome_groups_for_context_courses
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/outcome_groups`,
    { method: 'GET', params: parameters }
  );
}
