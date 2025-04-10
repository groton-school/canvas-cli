import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { ContentExport } from '../../../../Resources/ContentExports.js';

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
 * List content exports
 *
 * A paginated list of the past and pending content export jobs for a course,
 * group, or user. Exports are returned newest first.
 *
 * Nickname: list_content_exports_groups
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<ContentExport[]>(
    `/v1/groups/{group_id}/content_exports`,
    {
      method: 'GET',
      pathParams
    }
  );
}
