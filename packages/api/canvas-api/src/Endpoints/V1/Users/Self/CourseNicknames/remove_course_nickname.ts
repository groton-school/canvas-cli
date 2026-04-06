import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { CourseNickname } from '../../../../../Resources/Users.js';

export type remove_course_nicknamePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type remove_course_nicknameSearchParameters = Masquerade;

type Options = (
  | {
      path: remove_course_nicknamePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: remove_course_nicknamePathParameters;
    }
) &
  (
    | {
        query?: Partial<remove_course_nicknameSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<remove_course_nicknameSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: remove_course_nicknameSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: remove_course_nicknameSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Remove course nickname
 *
 * Remove the nickname for the given course. Subsequent course API calls will
 * return the actual name for the course.
 *
 * Nickname: remove_course_nickname
 */
export async function remove_course_nickname(options: Options) {
  const response = await client().fetchAs<CourseNickname>(
    `/api/v1/users/self/course_nicknames/{course_id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
