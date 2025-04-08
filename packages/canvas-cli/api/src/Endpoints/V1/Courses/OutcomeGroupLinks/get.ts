import { client } from '../../../../Client.js';
import { OutcomeLink } from '../../../../Resources/OutcomeGroups.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get all outcome links for context
 *
 * Nickname: get_all_outcome_links_for_context_courses
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/outcome_group_links`,
    { method: 'GET', params: parameters }
  );
}
