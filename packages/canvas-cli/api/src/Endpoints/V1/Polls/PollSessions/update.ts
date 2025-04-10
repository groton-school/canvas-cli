import { client } from '../../../../Client.js';

export type updatePathParameters = {
  /** ID */
  poll_id: string;
  /** ID */
  id: string;
};

export type updateFormParameters = {
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
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
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
export async function update({ pathParams, params }: Options) {
  return await client().fetchAs<void>(
    `/v1/polls/{poll_id}/poll_sessions/{id}`,
    {
      method: 'PUT',
      pathParams,
      params
    }
  );
}
