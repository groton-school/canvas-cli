import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { roleStringThenewlysetrole } from '../../../../Overrides.js';

export type switch_roleSearchParameters = Masquerade;

export type switch_roleFormParameters = Masquerade & {
  /** The role to switch to. */
  role: string;
};

type Options =
  | {
      query?: Partial<switch_roleSearchParameters>;
      /** @deprecated Use {Options.query} */
      searchParams?: Partial<switch_roleSearchParameters>;
      body?: Partial<switch_roleFormParameters>;
      /** @deprecated Use {@link Options.body} */
      params?: Partial<switch_roleFormParameters>;
      strict?: false;
    }
  | {
      query?: Partial<switch_roleSearchParameters>;
      /** @deprecated Use {Options.query} */
      searchParams: switch_roleSearchParameters;
      body?: Partial<switch_roleFormParameters>;
      /** @deprecated Use {@link Options.body} */
      params: switch_roleFormParameters;
      strict: true;
    };

/**
 * Switch role
 *
 * Switch the current user's role within the current experience.
 *
 * Nickname: switch_role
 */
export async function switch_role(options: Options) {
  const response = await client().fetchAs<roleStringThenewlysetrole>(
    `/api/v1/career/switch_role`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
