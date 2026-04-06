import { client, Masquerade } from '#client';
import { enabledboolean } from '../../../../Overrides.js';

export type check_if_canvas_career_is_enabledSearchParameters = Masquerade;

type Options =
  | {
      query?: Partial<check_if_canvas_career_is_enabledSearchParameters>;
      /** @deprecated Use {@link Options.query} */
      searchParams?: Partial<check_if_canvas_career_is_enabledSearchParameters>;
      strict?: false;
    }
  | ((
      | {
          query: check_if_canvas_career_is_enabledSearchParameters;
        }
      | {
          /** @deprecated Use {@link Options.query} */
          searchParams: check_if_canvas_career_is_enabledSearchParameters;
        }
    ) & {
      strict: true;
    });

/**
 * Check if Canvas Career is enabled
 *
 * Returns whether the root account has Canvas Career (Horizon) enabled in at
 * least one subaccount.
 *
 * Nickname: check_if_canvas_career_is_enabled
 */
export async function check_if_canvas_career_is_enabled(options: Options) {
  const response = await client().fetchAs<enabledboolean>(
    `/api/v1/career/enabled`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
