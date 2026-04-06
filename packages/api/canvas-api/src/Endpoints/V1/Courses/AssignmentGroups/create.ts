import { client, Masquerade } from '#client';
import { JSONObject, JSONValue } from '@battis/typescript-tricks';
import { AssignmentGroup } from '../../../../Resources/AssignmentGroups.js';

export type createPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /** The assignment group's name */
  name: string;
  /**
   * The position of this assignment group in relation to the other assignment
   * groups
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  position: number | string;
  /**
   * The percent of the total grade that this assignment group represents
   *
   * Type: number
   *
   * Format: 'float'
   */
  group_weight: number | string;
  /** The sis source id of the Assignment Group */
  sis_source_id: string;
  /**
   * The integration data of the Assignment Group
   *
   * Object
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
 * Nickname: create_assignment_group
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
