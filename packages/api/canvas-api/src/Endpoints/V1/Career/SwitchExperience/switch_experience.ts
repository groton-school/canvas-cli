import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { experienceStringThenewlysetexperience } from '../../../../Overrides.js';

export type switch_experienceSearchParameters = Masquerade;

export type switch_experienceFormParameters = Masquerade & {
  /** The experience to switch to. */
  experience: string;
};

type Options =
  | {
      query?: Partial<switch_experienceSearchParameters>;
      /** @deprecated Use {@link Options.query} */
      searchParams?: Partial<switch_experienceSearchParameters>;
      body?: Partial<switch_experienceFormParameters>;
      /** @deprecated Use {@link Options.body} */
      params?: Partial<switch_experienceFormParameters>;
      strict?: false;
    }
  | ((
      | {
          query: switch_experienceSearchParameters;
        }
      | {
          /** @deprecated Use {@link Options.query} */
          searchParams: switch_experienceSearchParameters;
        }
    ) &
      (
        | {
            body: switch_experienceFormParameters;
          }
        | {
            /** @deprecated Use {@link Options.body} */
            params: switch_experienceFormParameters;
          }
      ) & {
        strict: true;
      });

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
