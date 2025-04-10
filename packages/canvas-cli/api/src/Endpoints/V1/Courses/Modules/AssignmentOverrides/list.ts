import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../../Client.js';
import { ModuleAssignmentOverride } from '../../../../../Resources/Modules.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  context_module_id: string;
};

export type listSearchParameters = Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
export async function list({ pathParams }: Options) {
  return await client().fetchAs<ModuleAssignmentOverride[]>(
    `/v1/courses/{course_id}/modules/{context_module_id}/assignment_overrides`,
    {
      method: 'GET',
      pathParams
    }
  );
}
