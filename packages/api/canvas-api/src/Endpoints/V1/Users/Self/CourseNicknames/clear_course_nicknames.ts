import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type clear_course_nicknamesSearchParameters = Masquerade;

type Options =
  | {
      query?: Partial<clear_course_nicknamesSearchParameters>;
      /** @deprecated Use {Options.query} */
      searchParams?: Partial<clear_course_nicknamesSearchParameters>;
      strict?: false;
    }
  | {
      query?: Partial<clear_course_nicknamesSearchParameters>;
      /** @deprecated Use {Options.query} */
      searchParams: clear_course_nicknamesSearchParameters;
      strict: true;
    };

/**
 * Clear course nicknames
 *
 * Remove all stored course nicknames.
 *
 * Nickname: clear_course_nicknames
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
