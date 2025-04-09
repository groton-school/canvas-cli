import { JSONObject } from '@battis/typescript-tricks';
import { client } from '../../../../Client.js';
import { AssignmentGroup } from '../../../../Resources/AssignmentGroups.js';

type edit_assignment_groupPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  assignment_group_id: string;
};

type edit_assignment_groupFormParameters = {
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
  /**
   * The grading rules that are applied within this assignment group See the
   * Assignment Group object definition for format
   */
  rules: string;
};

type Options = {
  pathParams: edit_assignment_groupPathParameters;
  params?: edit_assignment_groupFormParameters;
};

/**
 * Edit an Assignment Group
 *
 * Modify an existing Assignment Group.
 *
 * Nickname: edit_assignment_group
 */
export async function edit_assignment_group({ pathParams, params }: Options) {
  return await client().fetchAs<AssignmentGroup>(
    `/v1/courses/{course_id}/assignment_groups/{assignment_group_id}`,
    {
      method: 'PUT',
      pathParams,
      params
    }
  );
}
