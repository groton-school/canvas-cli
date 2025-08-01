import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { roleStringThenewlysetrole } from '../../../../Overrides.js';

export type switch_roleSearchParameters = Masquerade;

export type switch_roleFormParameters = Masquerade & {
  /** The role to switch to. */
  role: string;
};

type Options =
  | {
      searchParams?: Partial<switch_roleSearchParameters>;
      params?: Partial<switch_roleFormParameters>;
      strict?: false;
    }
  | {
      searchParams: switch_roleSearchParameters;
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
