import { client } from '../../../../Client.js';
import { License } from '../../../../Resources/Files.js';

type listPathParameters = {
  /** ID */
  user_id: string;
};

type Options = {
  pathParams: listPathParameters;
};

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
