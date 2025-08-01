import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { experienceStringThenewlysetexperience } from '../../../../Overrides.js';

export type switch_experienceSearchParameters = Masquerade;

export type switch_experienceFormParameters = Masquerade & {
  /** The experience to switch to. */
  experience: string;
};

type Options =
  | {
      searchParams?: Partial<switch_experienceSearchParameters>;
      params?: Partial<switch_experienceFormParameters>;
      strict?: false;
    }
  | {
      searchParams: switch_experienceSearchParameters;
      params: switch_experienceFormParameters;
      strict: true;
    };

/**
 * Switch experience
 *
 * Switch the current user's active experience to the specified one.
 *
 * Nickname: switch_experience
 */
export async function switch_experience(options: Options) {
  const response =
    await client().fetchAs<experienceStringThenewlysetexperience>(
      `/api/v1/career/switch_experience`,
      {
        method: 'POST',
        ...options
      }
    );
  return response;
}
