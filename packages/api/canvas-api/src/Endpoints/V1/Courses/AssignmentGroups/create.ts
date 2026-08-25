import { JSONObject, JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { AssignmentGroup } from '../../../../Resources/AssignmentGroups.js';

export type createPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  course_id: string | number;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
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
};

type Options = (
  | {
      path: createPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: createPathParameters;
    }
) &
  (
    | {
        query?: Partial<createSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<createSearchParameters>;
        body?: Partial<createFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<createFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: createSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: createSearchParameters;
          }
      ) &
        (
          | {
              body: createFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: createFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Create an Assignment Group
 *
 * Create a new assignment group for this course.
 *
 * nickname: create_assignment_group
 *
 *
 *
 *
 */
export async function create(options: Options) {
  const response = await client().fetchAs<AssignmentGroup>(
    `/api/v1/courses/{course_id}/assignment_groups`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
