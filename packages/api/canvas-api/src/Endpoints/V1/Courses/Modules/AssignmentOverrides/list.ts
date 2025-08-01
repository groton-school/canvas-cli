import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { ModuleAssignmentOverride } from '../../../../../Resources/Modules.js';

export type listPathParameters = {
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

export type listSearchParameters = Masquerade & Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    }
);

/**
 * List a module's overrides
 *
 * Returns a paginated list of AssignmentOverrides that apply to the
 * ContextModule.
 *
 * Nickname: list_module_s_overrides
 */
export async function list(options: Options) {
  const response = await client().fetchAs<ModuleAssignmentOverride[]>(
    `/api/v1/courses/{course_id}/modules/{context_module_id}/assignment_overrides`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
