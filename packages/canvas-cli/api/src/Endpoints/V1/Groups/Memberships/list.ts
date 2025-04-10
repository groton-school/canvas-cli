import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { GroupMembership } from '../../../../Resources/Groups.js';

export type listPathParameters = {
  /** ID */
  group_id: string;
};

export type listSearchParameters = {
  /**
   * Only list memberships with the given workflow_states. By default it will
   * return all memberships.
   */
  filter_states: string[];
} & Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    }
);

/**
 * List group memberships
 *
 * A paginated list of the members of a group.
 *
 * Nickname: list_group_memberships
 */
export async function list({ pathParams, searchParams }: Options) {
  return await client().fetchAs<GroupMembership[]>(
    `/v1/groups/{group_id}/memberships`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
