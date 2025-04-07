type Parameters = {
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
  parameters: Parameters;
};

/**
 * Create a late policy
 *
 * Create a late policy. If the course already has a late policy, a bad_request
 * is returned since there can only be one late policy per course.
 *
 * Nickname: create_late_policy
 */
export async function create({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/courses/{id}/late_policy`, {
      method: 'POST',
      body: parameters
    })
  ).json();
}
