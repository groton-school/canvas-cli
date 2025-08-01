import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  section_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  assignment_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  anonymous_id: string | number;
};

export type getSearchParameters = Masquerade &
  Partial<{
    /** Associations to include with the group. */
    include: string[];
  }>;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    }
);

/**
 * Get a single submission by anonymous id
 *
 * Get a single submission, based on the submission's anonymous id.
 *
 * Nickname: get_single_submission_by_anonymous_id_sections
 */
export async function get(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/sections/{section_id}/assignments/{assignment_id}/anonymous_submissions/{anonymous_id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
