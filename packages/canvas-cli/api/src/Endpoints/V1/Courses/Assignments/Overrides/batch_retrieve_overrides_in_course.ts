import { client } from '../../../../../Client.js';
import { AssignmentOverride } from '../../../../../Resources/Assignments.js';

export type batch_retrieve_overrides_in_coursePathParameters = {
  /** ID */
  course_id: string;
};

export type batch_retrieve_overrides_in_courseSearchParameters = {
  /** Ids of overrides to retrieve */
  'assignment_overrides[id]': string[];
  /** Ids of assignments for each override */
  'assignment_overrides[assignment_id]': string[];
};

type Options = {
  pathParams: batch_retrieve_overrides_in_coursePathParameters;
  searchParams?: batch_retrieve_overrides_in_courseSearchParameters;
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
  pathParams,
  searchParams
}: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/assignments/overrides`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
