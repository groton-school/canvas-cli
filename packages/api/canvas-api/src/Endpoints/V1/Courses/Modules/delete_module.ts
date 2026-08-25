import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { Module } from '../../../../Resources/CoursePace.js';

export type delete_modulePathParameters = {
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
  id: string | number;
};

export type delete_moduleSearchParameters = Masquerade;

type Options = (
  | {
      path: delete_modulePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_modulePathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_moduleSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<delete_moduleSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: delete_moduleSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: delete_moduleSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Delete module
 *
 * Delete a module
 *
 * nickname: delete_module
 *
 *
 *
 *
 */
export async function delete_module(options: Options) {
  const response = await client().fetchAs<Module>(
    `/api/v1/courses/{course_id}/modules/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
