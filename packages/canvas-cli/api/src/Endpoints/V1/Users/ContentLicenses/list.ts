import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { License } from '../../../../Resources/Files.js';

export type listPathParameters = {
  /** ID */
  user_id: string;
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
 * Nickname: list_licenses_users
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/users/{user_id}/content_licenses`,
    {
      method: 'GET',
      pathParams
    }
  );
}
