import { JSONObject } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { AssignmentGroup } from '../../../../Resources/AssignmentGroups.js';

export type updatePathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  assignment_group_id: string;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
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
  pathParams: updatePathParameters;
} & (
  | {
      searchParams?: Partial<updateSearchParameters>;
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      searchParams: updateSearchParameters;
      params: updateFormParameters;
      strict: true;
    }
);

/**
 * Edit an Assignment Group
 *
 * Modify an existing Assignment Group.
 *
 * Nickname: edit_assignment_group
 */
export async function update(options: Options) {
  const response = await client().fetchAs<AssignmentGroup>(
    `/api/v1/courses/{course_id}/assignment_groups/{assignment_group_id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
