import { License } from '../../../../Resources/Files.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List licenses
 *
 * A paginated list of licenses that can be applied
 *
 * Nickname: list_licenses_users
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/users/{user_id}/content_licenses`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
