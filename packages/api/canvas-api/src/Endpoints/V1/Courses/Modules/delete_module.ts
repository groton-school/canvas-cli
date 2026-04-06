import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { Module } from '../../../../Resources/CoursePace.js';

export type delete_modulePathParameters = {
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
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<delete_moduleSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<delete_moduleSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: delete_moduleSearchParameters;
        strict: true;
      }
  );

/**
 * Delete module
 *
 * Delete a module
 *
 * Nickname: delete_module
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
