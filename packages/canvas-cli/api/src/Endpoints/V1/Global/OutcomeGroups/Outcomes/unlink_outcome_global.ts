import { client } from '../../../../../Client.js';
import { OutcomeLink } from '../../../../../Resources/OutcomeGroups.js';

export type unlink_outcome_globalPathParameters = {
  /** ID */
  id: string;
  /** ID */
  outcome_id: string;
};

type Options = {
  pathParams: unlink_outcome_globalPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
export async function unlink_outcome_global({ pathParams }: Options) {
  return await client().fetchAs<OutcomeLink>(
    `/v1/global/outcome_groups/{id}/outcomes/{outcome_id}`,
    {
      method: 'DELETE',
      pathParams
    }
  );
}
