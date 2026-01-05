import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';

export type patch_late_policyPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type patch_late_policySearchParameters = Masquerade;

export type patch_late_policyFormParameters = Masquerade & {
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
  pathParams: patch_late_policyPathParameters;
} & (
  | {
      searchParams?: Partial<patch_late_policySearchParameters>;
      params?: Partial<patch_late_policyFormParameters>;
      strict?: false;
    }
  | {
      searchParams: patch_late_policySearchParameters;
      params: patch_late_policyFormParameters;
      strict: true;
    }
);

/**
 * Patch a late policy
 *
 * Patch a late policy. No body is returned upon success.
 *
 * Nickname: patch_late_policy
 */
export async function patch_late_policy(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{id}/late_policy`,
    {
      method: 'PATCH',
      ...options
    }
  );
  return response;
}
