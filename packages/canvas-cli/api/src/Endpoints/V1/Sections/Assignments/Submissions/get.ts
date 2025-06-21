import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';

export type getPathParameters = {
  /** ID */
  section_id: string;
  /** ID */
  assignment_id: string;
  /** ID */
  user_id: string;
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
 * Get a single submission
 *
 * Get a single submission, based on user id.
 *
 * Nickname: get_single_submission_sections
 */
export async function get(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
