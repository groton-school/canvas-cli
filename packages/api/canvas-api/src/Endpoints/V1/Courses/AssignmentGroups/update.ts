import { JSONObject, JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { AssignmentGroup } from '../../../../Resources/AssignmentGroups.js';

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
  assignment_group_id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /**
   * The assignment group&#x27;s name
   *
   *
   *
   *
   */
  name: string;
  /**
     * The position of this assignment group in relation to the other assignment groups
     *
     * type: integer

format: 'int64'
     *
     * 
     */
  position: number | string;
  /**
     * The percent of the total grade that this assignment group represents
     *
     * type: number

format: 'float'
     *
     * 
     */
  group_weight: number | string;
  /**
   * The sis source id of the Assignment Group
   *
   *
   *
   *
   */
  sis_source_id: string;
  /**
   * The integration data of the Assignment Group
   *
   * Object
   *
   *
   */
  integration_data: JSONObject;
  /**
     * The grading rules that are applied within this assignment group
See the Assignment Group object definition for format
     *
     * 
     *
     * 
     */
  rules: string;
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
 * Edit an Assignment Group
 *
 * Modify an existing Assignment Group.
 *
 * nickname: edit_assignment_group
 *
 *
 *
 *
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
