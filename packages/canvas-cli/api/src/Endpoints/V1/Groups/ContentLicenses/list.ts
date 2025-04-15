import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { License } from '../../../../Resources/Files.js';

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
 * List licenses
 *
 * A paginated list of licenses that can be applied
 *
 * Nickname: list_licenses_groups
 */
export async function list(options: Options) {
  return await client().fetchAs<License[]>(
    `/api/v1/groups/{group_id}/content_licenses`,
    {
      method: 'GET',
      ...options
    }
  );
}
