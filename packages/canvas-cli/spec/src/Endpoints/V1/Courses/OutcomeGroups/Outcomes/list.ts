import { OutcomeLink } from '../../../../../Resources/OutcomeGroups.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List linked outcomes
 *
 * A paginated list of the immediate OutcomeLink children of the outcome group.
 *
 * Nickname: list_linked_outcomes_courses
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/courses/{course_id}/outcome_groups/{id}/outcomes`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
