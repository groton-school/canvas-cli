import { Conference } from '../../../../Resources/Conferences.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List conferences
 *
 * Retrieve the paginated list of conferences for this context
 *
 * This API returns a JSON object containing the list of conferences, the key
 * for the list of conferences is "conferences"
 *
 * Nickname: list_conferences_groups
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/groups/{group_id}/conferences`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
