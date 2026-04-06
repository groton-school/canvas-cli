import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { RubricImport } from '../../../../../Overrides.js';

export type getPathParameters = {
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

export type getSearchParameters = Masquerade;

type Options = (
  | {
      path: getPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: getPathParameters;
    }
) &
  (
    | {
        query?: Partial<getSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<getSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<getSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: getSearchParameters;
        strict: true;
      }
  );

/**
 * Get the status of a rubric import
 *
 * Can return the latest rubric import for an account or course, or a specific
 * import by id
 *
 * Nickname: get_status_of_rubric_import_courses
 */
export async function get(options: Options) {
  const response = await client().fetchAs<RubricImport>(
    `/api/v1/courses/{course_id}/rubrics/upload/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
