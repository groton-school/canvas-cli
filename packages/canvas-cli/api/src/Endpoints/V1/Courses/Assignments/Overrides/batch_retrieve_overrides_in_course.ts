import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { AssignmentOverride } from '../../../../../Resources/Assignments.js';

export type batch_retrieve_overrides_in_coursePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type batch_retrieve_overrides_in_courseSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /** Ids of overrides to retrieve */
    'assignment_overrides[id]': string[];
    /** Ids of assignments for each override */
    'assignment_overrides[assignment_id]': string[];
  }>;

type Options = {
  pathParams: batch_retrieve_overrides_in_coursePathParameters;
} & (
  | {
      searchParams?: Partial<batch_retrieve_overrides_in_courseSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: batch_retrieve_overrides_in_courseSearchParameters;
      strict: true;
    }
);

/**
 * Batch retrieve overrides in a course
 *
 * Returns a list of specified overrides in this course, providing they target
 * sections/groups/students visible to the current user. Returns null elements
 * in the list for requests that were not found.
 *
 * Nickname: batch_retrieve_overrides_in_course
 */
export async function batch_retrieve_overrides_in_course(options: Options) {
  const response = await client().fetchAs<AssignmentOverride[]>(
    `/api/v1/courses/{course_id}/assignments/overrides`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
