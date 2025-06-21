import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';

export type getPathParameters = {
  /** ID */
  assignment_id: string;
  /** ID */
  submission_id: string;
};

export type getSearchParameters = Masquerade;

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
 * Get the history of a single submission
 *
 * Get a list of all attempts made for a submission, based on submission id.
 *
 * Nickname: get_history_of_single_submission
 */
export async function get(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/lti/assignments/{assignment_id}/submissions/{submission_id}/history`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
