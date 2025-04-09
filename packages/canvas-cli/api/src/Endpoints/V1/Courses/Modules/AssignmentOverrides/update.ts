import { client } from '../../../../../Client.js';

export type updatePathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  context_module_id: string;
};

export type updateFormParameters = {
  /**
   * List of overrides to apply to the module. Overrides that already exist
   * should include an ID and will be updated if needed. New overrides will be
   * created for overrides in the list without an ID. Overrides not included
   * in the list will be deleted. Providing an empty list will delete all of
   * the module's overrides. Keys for each override object can include: 'id',
   * 'title', 'student_ids', and 'course_section_id'. 'group_id' is accepted
   * if the Differentiation Tags account setting is enabled.
   */
  overrides: string[];
};

type Options = {
  pathParams: updatePathParameters;
  params?: updateFormParameters;
};

/**
 * Update a module's overrides
 *
 * Accepts a list of overrides and applies them to the ContextModule. Returns
 * 204 No Content response code if successful.
 *
 * Nickname: update_module_s_overrides
 */
export async function update({ pathParams, params }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/modules/{context_module_id}/assignment_overrides`,
    {
      method: 'PUT',
      pathParams,
      params
    }
  );
}
