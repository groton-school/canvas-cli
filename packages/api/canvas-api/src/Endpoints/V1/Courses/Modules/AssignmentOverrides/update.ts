import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type updatePathParameters = {
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

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /**
     * List of overrides to apply to the module. Overrides that already exist should include an ID
and will be updated if needed. New overrides will be created for overrides in the list
without an ID. Overrides not included in the list will be deleted. Providing an empty list
will delete all of the module&#x27;s overrides. Keys for each override object can include: &#x27;id&#x27;,
&#x27;title&#x27;, &#x27;student_ids&#x27;, and &#x27;course_section_id&#x27;. &#x27;group_id&#x27; is accepted if the Differentiation
Tags account setting is enabled.
     *
     * 
     *
     * 
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
 * Update a module&#x27;s overrides
 *
 * Accepts a list of overrides and applies them to the ContextModule. Returns 204 No Content response
code if successful.
 *
 * nickname: update_module_s_overrides
 *
 * 
 *
 * 
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
