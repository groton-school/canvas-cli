import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../../Client.js';
import { OutcomeGroup } from '../../../../../Resources/OutcomeGroups.js';

export type listPathParameters = {
  /** ID */
  id: string;
};

export type listSearchParameters = Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * List subgroups
 *
 * A paginated list of the immediate OutcomeGroup children of the outcome group.
 *
 * Nickname: list_subgroups_global
 */
export async function list(options: Options) {
  return await client().fetchAs<OutcomeGroup[]>(
    `/api/v1/global/outcome_groups/{id}/subgroups`,
    {
      method: 'GET',
      ...options
    }
  );
}
