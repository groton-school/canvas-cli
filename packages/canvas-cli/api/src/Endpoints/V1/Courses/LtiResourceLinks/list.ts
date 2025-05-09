import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { LtiResourceLink } from '../../../../Resources/LtiResourceLinks.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
};

export type listSearchParameters = Partial<{
  /**
   * Include deleted resource links and links associated with deleted content
   * in response. Default is false.
   */
  include_deleted: boolean;
  /**
   * The number of registrations to return per page. Defaults to 50.
   *
   * Format: 'int64'
   */
  per_page: number;
}> &
  Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    }
);

/**
 * List LTI Resource Links
 *
 * Returns all Resource Links in the specified course. This includes links that
 * are associated with Assignments, Module Items, Collaborations, and that are
 * embedded in rich content. This endpoint is paginated, and will return 50
 * links per page by default. Links are sorted by the order in which they were
 * created.
 *
 * Nickname: list_lti_resource_links
 */
export async function list(options: Options) {
  return await client().fetchAs<LtiResourceLink[]>(
    `/api/v1/courses/{course_id}/lti_resource_links`,
    {
      method: 'GET',
      ...options
    }
  );
}
