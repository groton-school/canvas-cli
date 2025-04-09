import { JSONObject } from '@battis/typescript-tricks';
import { client } from '../../../../Client.js';
import { AssignmentGroup } from '../../../../Resources/AssignmentGroups.js';

type createPathParameters = {
  /** ID */
  course_id: string;
};

type createFormParameters = {
  /** The assignment group's name */
  name: string;
  /**
   * The position of this assignment group in relation to the other assignment
   * groups
   *
   * Format: 'int64'
   */
  position: number;
  /**
   * The percent of the total grade that this assignment group represents
   *
   * Format: 'float'
   */
  group_weight: number;
  /** The sis source id of the Assignment Group */
  sis_source_id: string;
  /**
   * The integration data of the Assignment Group
   *
   * Object
   */
  integration_data: JSONObject;
};

type Options = {
  pathParams: createPathParameters;
  params?: createFormParameters;
};

/**
 * Create an Assignment Group
 *
 * Create a new assignment group for this course.
 *
 * Nickname: create_assignment_group
 */
export async function create({ pathParams, params }: Options) {
  return await client().fetchAs<AssignmentGroup>(
    `/v1/courses/{course_id}/assignment_groups`,
    {
      method: 'POST',
      pathParams,
      params
    }
  );
}
