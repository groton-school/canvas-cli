import { client } from '../../../../Client.js';

export type createPathParameters = {
  /** ID */
  id: string;
};

export type createFormParameters = {
  /** Whether to enable the missing submission deduction late policy. */
  'late_policy[missing_submission_deduction_enabled]': boolean;
  /** How many percentage points to deduct from a missing submission. */
  'late_policy[missing_submission_deduction]': number;
  /** Whether to enable the late submission deduction late policy. */
  'late_policy[late_submission_deduction_enabled]': boolean;
  /** How many percentage points to deduct per the late submission interval. */
  'late_policy[late_submission_deduction]': number;
  /** The interval for late policies. */
  'late_policy[late_submission_interval]': string;
  /** Whether to enable the late submission minimum percent for a late policy. */
  'late_policy[late_submission_minimum_percent_enabled]': boolean;
  /** The minimum grade a submissions can have in percentage points. */
  'late_policy[late_submission_minimum_percent]': number;
};

type Options = {
  pathParams: createPathParameters;
  params?: createFormParameters;
};

/**
 * Create a late policy
 *
 * Create a late policy. If the course already has a late policy, a bad_request
 * is returned since there can only be one late policy per course.
 *
 * Nickname: create_late_policy
 */
export async function create({ pathParams, params }: Options) {
  return await client().fetchAs<void>(`/v1/courses/{id}/late_policy`, {
    method: 'POST',
    pathParams,
    params
  });
}
