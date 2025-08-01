import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  context_module_id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
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
 * Update a module's overrides
 *
 * Accepts a list of overrides and applies them to the ContextModule. Returns
 * 204 No Content response code if successful.
 *
 * Nickname: update_module_s_overrides
 */
export async function update(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/modules/{context_module_id}/assignment_overrides`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
