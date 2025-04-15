import { client } from '../../../../Client.js';

type Options =
  | {
      strict?: false;
    }
  | {
      strict: true;
    };

/**
 * Redirect to root outcome group for context
 *
 * Convenience redirect to find the root outcome group for a particular context.
 * Will redirect to the appropriate outcome group's URL.
 *
 * Nickname: redirect_to_root_outcome_group_for_context_global
 */
export async function redirect_to_root_outcome_group_for_context_global(
  options: Options
) {
  return await client().fetchAs<void>(`/api/v1/global/root_outcome_group`, {
    method: 'GET',
    ...options
  });
}
