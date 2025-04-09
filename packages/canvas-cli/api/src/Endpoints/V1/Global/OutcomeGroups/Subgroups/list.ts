import { client } from '../../../../../Client.js';
import { OutcomeGroup } from '../../../../../Resources/OutcomeGroups.js';

export type listPathParameters = {
  /** ID */
  id: string;
};

type Options = {
  pathParams: listPathParameters;
};

/**
 * List subgroups
 *
 * A paginated list of the immediate OutcomeGroup children of the outcome group.
 *
 * Nickname: list_subgroups_global
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/global/outcome_groups/{id}/subgroups`,
    {
      method: 'GET',
      pathParams
    }
  );
}
