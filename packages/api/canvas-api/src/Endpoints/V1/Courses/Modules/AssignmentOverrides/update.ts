import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

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

type Options = (
  | {
      path: updatePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: updatePathParameters;
    }
) &
  (
    | {
        query?: Partial<updateSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<updateSearchParameters>;
        body?: Partial<updateFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<updateFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: updateSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: updateSearchParameters;
          }
      ) &
        (
          | {
              body: updateFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: updateFormParameters;
            }
        ) & {
          strict: true;
        })
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
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/modules/{context_module_id}/assignment_overrides`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
