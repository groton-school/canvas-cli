import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { CourseNickname } from '../../../../../Resources/Users.js';

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
 * Get course nickname
 *
 * Returns the nickname for a specific course.
 *
 * Nickname: get_course_nickname
 */
export async function get(options: Options) {
  const response = await client().fetchAs<CourseNickname>(
    `/api/v1/users/self/course_nicknames/{course_id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
