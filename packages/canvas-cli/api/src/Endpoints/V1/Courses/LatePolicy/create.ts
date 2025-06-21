import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';

export type createPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /**
   * Whether to enable the missing submission deduction late policy.
   *
   * Type: boolean
   */
  'late_policy[missing_submission_deduction_enabled]': boolean | string;
  /**
   * How many percentage points to deduct from a missing submission.
   *
   * Type: number
   */
  'late_policy[missing_submission_deduction]': number | string;
  /**
   * Whether to enable the late submission deduction late policy.
   *
   * Type: boolean
   */
  'late_policy[late_submission_deduction_enabled]': boolean | string;
  /**
   * How many percentage points to deduct per the late submission interval.
   *
   * Type: number
   */
  'late_policy[late_submission_deduction]': number | string;
  /** The interval for late policies. */
  'late_policy[late_submission_interval]': string;
  /**
   * Whether to enable the late submission minimum percent for a late policy.
   *
   * Type: boolean
   */
  'late_policy[late_submission_minimum_percent_enabled]': boolean | string;
  /**
   * The minimum grade a submissions can have in percentage points.
   *
   * Type: number
   */
  'late_policy[late_submission_minimum_percent]': number | string;
};

type Options = {
  pathParams: createPathParameters;
} & (
  | {
      searchParams?: Partial<createSearchParameters>;
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      searchParams: createSearchParameters;
      params: createFormParameters;
      strict: true;
    }
);

/**
 * Create a late policy
 *
 * Create a late policy. If the course already has a late policy, a bad_request
 * is returned since there can only be one late policy per course.
 *
 * Nickname: create_late_policy
 */
export async function create(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{id}/late_policy`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
