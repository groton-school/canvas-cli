import { PageView } from '../../../../Resources/Users.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List user page views
 *
 * Return a paginated list of the user's page view history in json format,
 * similar to the available CSV download. Page views are returned in descending
 * order, newest to oldest.
 *
 * Nickname: list_user_page_views
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/users/{user_id}/page_views`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
