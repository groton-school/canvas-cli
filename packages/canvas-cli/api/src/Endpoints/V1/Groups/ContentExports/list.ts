import { client } from '../../../../Client.js';
import { ContentExport } from '../../../../Resources/ContentExports.js';

type listPathParameters = {
  /** ID */
  group_id: string;
};

type Options = {
  pathParams: listPathParameters;
};

/**
 * List content exports
 *
 * A paginated list of the past and pending content export jobs for a course,
 * group, or user. Exports are returned newest first.
 *
 * Nickname: list_content_exports_groups
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/groups/{group_id}/content_exports`,
    {
      method: 'GET',
      pathParams
    }
  );
}
