import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade, Paginated } from '#client';
import { ModuleAssignmentOverride } from '../../../../../Resources/Modules.js';

export type listPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  course_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  context_module_id: string | number;
};

export type listSearchParameters = Masquerade & Paginated;

type Options = (
  | {
      path: listPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: listPathParameters;
    }
) &
  (
    | {
        query?: Partial<listSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<listSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: listSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: listSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * List a module&#x27;s overrides
 *
 * Returns a paginated list of AssignmentOverrides that apply to the ContextModule.
 *
 * nickname: list_module_s_overrides
 *
 *
 *
 *
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
