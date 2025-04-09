import { client } from '../../../../Client.js';
import { ContentExport } from '../../../../Resources/ContentExports.js';

type listPathParameters = {
  /** ID */
  course_id: string;
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
 * Nickname: list_content_exports_courses
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/content_exports`,
    {
      method: 'GET',
      pathParams
    }
  );
}
