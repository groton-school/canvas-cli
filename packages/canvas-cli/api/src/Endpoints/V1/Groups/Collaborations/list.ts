import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { Collaboration } from '../../../../Resources/Collaborations.js';

export type listPathParameters = {
  /** ID */
  group_id: string;
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
 * List collaborations
 *
 * A paginated list of collaborations the current user has access to in the
 * context of the course provided in the url. NOTE: this only returns
 * ExternalToolCollaboration type collaborations.
 *
 * Curl https://<canvas>/api/v1/courses/1/collaborations/
 *
 * Nickname: list_collaborations_groups
 */
export async function list(options: Options) {
  return await client().fetchAs<Collaboration[]>(
    `/api/v1/groups/{group_id}/collaborations`,
    {
      method: 'GET',
      ...options
    }
  );
}
