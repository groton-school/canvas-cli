import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { OutcomeLink } from '../../../../../Resources/OutcomeGroups.js';

export type unlink_outcome_globalPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  outcome_id: string | number;
};

export type unlink_outcome_globalSearchParameters = Masquerade;

type Options = {
  pathParams: unlink_outcome_globalPathParameters;
} & (
  | {
      searchParams?: Partial<unlink_outcome_globalSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: unlink_outcome_globalSearchParameters;
      strict: true;
    }
);

/**
 * Unlink an outcome
 *
 * Unlinking an outcome only deletes the outcome itself if this was the last
 * link to the outcome in any group in any context. Aligned outcomes cannot be
 * deleted; as such, if this is the last link to an aligned outcome, the
 * unlinking will fail.
 *
 * Nickname: unlink_outcome_global
 */
export async function unlink_outcome_global(options: Options) {
  const response = await client().fetchAs<OutcomeLink>(
    `/api/v1/global/outcome_groups/{id}/outcomes/{outcome_id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
