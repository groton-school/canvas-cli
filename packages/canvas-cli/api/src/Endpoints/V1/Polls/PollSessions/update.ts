import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';

export type updatePathParameters = {
  /** ID */
  poll_id: string;
  /** ID */
  id: string;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /**
   * The id of the course this session is associated with.
   *
   * Format: 'int64'
   */
  'poll_sessions[course_id]': number[];
  /**
   * The id of the course section this session is associated with.
   *
   * Format: 'int64'
   */
  'poll_sessions[course_section_id]': number[];
  /** Whether or not results are viewable by students. */
  'poll_sessions[has_public_results]': boolean[];
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      searchParams?: Partial<updateSearchParameters>;
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      searchParams: updateSearchParameters;
      params: updateFormParameters;
      strict: true;
    }
);

/**
 * Update a single poll session
 *
 * Update an existing poll session for this poll
 *
 * Nickname: update_single_poll_session
 */
export async function update(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/polls/{poll_id}/poll_sessions/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
