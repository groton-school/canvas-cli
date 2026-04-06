import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type select_mastery_pathPathParameters = {
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
  module_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type select_mastery_pathSearchParameters = Masquerade;

export type select_mastery_pathFormParameters = Masquerade & {
  /**
   * Assignment set chosen, as specified in the mastery_paths portion of the
   * context module item response
   */
  assignment_set_id: string;
  /**
   * Which student the selection applies to. If not specified, current user is
   * implied.
   */
  student_id: string;
};

type Options = (
  | {
      path: select_mastery_pathPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: select_mastery_pathPathParameters;
    }
) &
  (
    | {
        query?: Partial<select_mastery_pathSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<select_mastery_pathSearchParameters>;
        body?: Partial<select_mastery_pathFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<select_mastery_pathFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: select_mastery_pathSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: select_mastery_pathSearchParameters;
          }
      ) &
        (
          | {
              body: select_mastery_pathFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: select_mastery_pathFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Select a mastery path
 *
 * Select a mastery path when module item includes several possible paths.
 * Requires Mastery Paths feature to be enabled. Returns a compound document
 * with the assignments included in the given path and any module items related
 * to those assignments
 *
 * Nickname: select_mastery_path
 */
export async function select_mastery_path(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/modules/{module_id}/items/{id}/select_mastery_path`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
