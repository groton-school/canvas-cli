import { client } from '../../../../Client.js';

export type createPathParameters = {
  /** ID */
  poll_id: string;
};

export type createFormParameters = {
  /**
   * The id of the course this session is associated with.
   *
   * Format: 'int64'
   */
  'poll_sessions[course_id]': string[];
  /**
   * The id of the course section this session is associated with.
   *
   * Format: 'int64'
   */
  'poll_sessions[course_section_id]': string[];
  /** Whether or not results are viewable by students. */
  'poll_sessions[has_public_results]': string[];
};

type Options = {
  pathParams: createPathParameters;
} & (
  | {
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      params?: createFormParameters;
      strict: true;
    }
);

/**
 * Create a single poll session
 *
 * Create a new poll session for this poll
 *
 * Nickname: create_single_poll_session
 */
export async function create({ pathParams, params }: Options) {
  return await client().fetchAs<void>(`/v1/polls/{poll_id}/poll_sessions`, {
    method: 'POST',
    pathParams,
    params
  });
}
