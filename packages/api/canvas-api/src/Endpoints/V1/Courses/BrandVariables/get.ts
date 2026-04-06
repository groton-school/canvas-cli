import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
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
 * Get the brand config variables for a sub-account or course
 *
 * Will redirect to a static json file that has all of the brand variables used
 * by the provided context. Even though this is a redirect, do not store the
 * redirected url since if the sub-account makes any changes it will redirect to
 * a new url.
 *
 * Nickname: get_brand_config_variables_for_sub_account_or_course_courses
 */
export async function get(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/brand_variables`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
