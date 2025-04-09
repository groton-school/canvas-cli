import { client } from '../../../../Client.js';

type getPathParameters = {
  /** ID */
  assignment_id: string;
  /** ID */
  submission_id: string;
};

type Options = {
  pathParams: getPathParameters;
};

/**
 * Get a single submission
 *
 * Get a single submission, based on submission id.
 *
 * Nickname: get_single_submission
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/lti/assignments/{assignment_id}/submissions/{submission_id}`,
    {
      method: 'GET',
      pathParams
    }
  );
}
