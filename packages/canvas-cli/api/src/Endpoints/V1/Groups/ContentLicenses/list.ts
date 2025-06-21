import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { License } from '../../../../Resources/Files.js';

export type listPathParameters = {
  /** ID */
  group_id: string;
};

export type listSearchParameters = Masquerade & Paginated;

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
 * List licenses
 *
 * A paginated list of licenses that can be applied
 *
 * Nickname: list_licenses_groups
 */
export async function list(options: Options) {
  const response = await client().fetchAs<License[]>(
    `/api/v1/groups/{group_id}/content_licenses`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
