import { client } from '../../../../../Client.js';
import { PageRevision } from '../../../../../Resources/Pages.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List revisions
 *
 * A paginated list of the revisions of a page. Callers must have update rights
 * on the page in order to see page history.
 *
 * Nickname: list_revisions_groups
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/groups/{group_id}/pages/{url_or_id}/revisions`,
    { method: 'GET', params: parameters }
  );
}
