import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

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
 * Get a single submission
 *
 * Get a single submission, based on submission id.
 *
 * Nickname: get_single_submission
 */
export async function get(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/lti/assignments/{assignment_id}/submissions/{submission_id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
