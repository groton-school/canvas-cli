import { Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { License } from '../../../../Resources/Files.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
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
 * Nickname: list_licenses_courses
 */
export async function list(options: Options) {
  const response = await client().fetchAs<License[]>(
    `/api/v1/courses/{course_id}/content_licenses`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
