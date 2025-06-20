import { client } from '../../../Client.js';
import { LtiAssignment } from '../../../Resources/PlagiarismDetectionPlatformAssignments.js';

export type getPathParameters = {
  /** ID */
  assignment_id: string;
};

export type getSearchParameters = Partial<{
  /** The id of the user. Can be a Canvas or LTI id for the user. */
  user_id: string;
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
 * Get a single assignment (lti)
 *
 * Get a single Canvas assignment by Canvas id or LTI id. Tool providers may
 * only access assignments that are associated with their tool.
 *
 * Nickname: get_single_assignment_lti
 */
export async function get(options: Options) {
  const response = await client().fetchAs<LtiAssignment>(
    `/api/lti/assignments/{assignment_id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
