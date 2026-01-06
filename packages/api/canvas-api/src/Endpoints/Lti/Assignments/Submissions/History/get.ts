import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';

export type getPathParameters = {
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
  submission_id: string | number;
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
  const response = await client().fetchAs<JSONValue>(
    `/api/lti/assignments/{assignment_id}/submissions/{submission_id}/history`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
