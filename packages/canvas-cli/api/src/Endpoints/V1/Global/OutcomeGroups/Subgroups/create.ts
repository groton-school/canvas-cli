import { client } from '../../../../../Client.js';
import { OutcomeGroup } from '../../../../../Resources/OutcomeGroups.js';

export type createPathParameters = {
  /** ID */
  id: string;
};

export type createFormParameters = {
  /** The title of the new outcome group. */
  title: string;
  /** The description of the new outcome group. */
  description: string;
  /** A custom GUID for the learning standard */
  vendor_guid: string;
};

type Options = {
  pathParams: createPathParameters;
} & (
  | {
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      params: createFormParameters;
      strict: true;
    }
);

/**
 * Create a subgroup
 *
 * Creates a new empty subgroup under the outcome group with the given title and
 * description.
 *
 * Nickname: create_subgroup_global
 */
export async function create(options: Options) {
  return await client().fetchAs<OutcomeGroup>(
    `/api/v1/global/outcome_groups/{id}/subgroups`,
    {
      method: 'POST',
      ...options
    }
  );
}
