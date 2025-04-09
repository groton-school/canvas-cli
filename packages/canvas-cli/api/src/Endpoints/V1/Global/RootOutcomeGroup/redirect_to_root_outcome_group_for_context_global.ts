import { client } from '../../../../Client.js';

type Options = {};

/**
 * Redirect to root outcome group for context
 *
 * Convenience redirect to find the root outcome group for a particular context.
 * Will redirect to the appropriate outcome group's URL.
 *
 * Nickname: redirect_to_root_outcome_group_for_context_global
 */
export async function redirect_to_root_outcome_group_for_context_global({}: Options) {
  return await client().fetchAs<void>(`/v1/global/root_outcome_group`, {
    method: 'GET'
  });
}
