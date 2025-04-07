import { AssignmentGroup } from '../../../../Resources/AssignmentGroups.js';

type Parameters = {
  /** The assignment group's name */
  name: string;
  /**
   * The position of this assignment group in relation to the other assignment
   * groups
   *
   * Format: int64
   */
  position: number;
  /**
   * The percent of the total grade that this assignment group represents
   *
   * Format: float
   */
  group_weight: number;
  /** The sis source id of the Assignment Group */
  sis_source_id: string;
  /** The integration data of the Assignment Group */
  integration_data: object;
  /**
   * The grading rules that are applied within this assignment group See the
   * Assignment Group object definition for format
   */
  rules: string;
};

type Options = {
  parameters: Parameters;
};

/**
 * Edit an Assignment Group
 *
 * Modify an existing Assignment Group.
 *
 * Nickname: edit_assignment_group
 */
export async function edit_assignment_group({
  parameters
}: Options): Promise<AssignmentGroup> {
  return await (
    await fetch(
      `/v1/courses/{course_id}/assignment_groups/{assignment_group_id}`,
      { method: 'PUT', body: parameters }
    )
  ).json();
}
