import { client } from '../../../Client.js';
import { LtiAssignment } from '../../../Resources/PlagiarismDetectionPlatformAssignments.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a single assignment (lti)
 *
 * Get a single Canvas assignment by Canvas id or LTI id. Tool providers may
 * only access assignments that are associated with their tool.
 *
 * Nickname: get_single_assignment_lti
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<LtiAssignment>(
    `/lti/assignments/{assignment_id}`,
    { method: 'GET', params: parameters }
  );
}
