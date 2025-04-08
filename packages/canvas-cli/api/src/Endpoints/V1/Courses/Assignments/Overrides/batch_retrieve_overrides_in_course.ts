import { client } from '../../../../../Client.js';
import { AssignmentOverride } from '../../../../../Resources/Assignments.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Batch retrieve overrides in a course
 *
 * Returns a list of specified overrides in this course, providing they target
 * sections/groups/students visible to the current user. Returns null elements
 * in the list for requests that were not found.
 *
 * Nickname: batch_retrieve_overrides_in_course
 */
export async function batch_retrieve_overrides_in_course({
  parameters
}: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/assignments/overrides`,
    { method: 'GET', params: parameters }
  );
}
