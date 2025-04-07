import { OutcomeAlignment } from '../../../../Resources/OutcomeResults.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get aligned assignments for an outcome in a course for a particular student
 *
 * Nickname:
 * get_aligned_assignments_for_outcome_in_course_for_particular_student
 */
export async function get({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/courses/{course_id}/outcome_alignments`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
