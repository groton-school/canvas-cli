import { client } from '../../../../Client.js';

export type getPathParameters = {
  /** ID */
  assignment_id: string;
  /** ID */
  submission_id: string;
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Get a single submission
 *
 * Get a single submission, based on submission id.
 *
 * Nickname: get_single_submission
 */
export async function get(options: Options) {
  return await client().fetchAs<void>(
    `/api/lti/assignments/{assignment_id}/submissions/{submission_id}`,
    {
      method: 'GET',
      ...options
    }
  );
}
