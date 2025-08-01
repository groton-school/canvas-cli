import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';

export type clear_course_nicknamesSearchParameters = Masquerade;

type Options =
  | {
      searchParams?: Partial<clear_course_nicknamesSearchParameters>;
      strict?: false;
    }
  | {
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
  const response = await client().fetchAs<void>(
    `/api/v1/users/self/course_nicknames`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
