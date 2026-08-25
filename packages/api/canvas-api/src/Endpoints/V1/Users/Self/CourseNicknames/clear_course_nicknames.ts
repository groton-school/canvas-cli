import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type clear_course_nicknamesSearchParameters = Masquerade;

type Options =
  | {
      query?: Partial<clear_course_nicknamesSearchParameters>;
      /** @deprecated Use {@link Options.query} */
      searchParams?: Partial<clear_course_nicknamesSearchParameters>;
      strict?: false;
    }
  | ((
      | {
          query: clear_course_nicknamesSearchParameters;
        }
      | {
          /** @deprecated Use {@link Options.query} */
          searchParams: clear_course_nicknamesSearchParameters;
        }
    ) & {
      strict: true;
    });

/**
 * Clear course nicknames
 *
 * Remove all stored course nicknames.
 *
 * nickname: clear_course_nicknames
 *
 *
 *
 *
 */
export async function clear_course_nicknames(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/users/self/course_nicknames`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
