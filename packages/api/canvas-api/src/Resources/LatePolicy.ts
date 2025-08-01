export type LatePolicy = {
  /**
   * The unique identifier for the late policy
   *
   * Type: integer
   */
  id: number | string;
  /**
   * The unique identifier for the course
   *
   * Type: integer
   */
  course_id: number | string;
  /**
   * Whether to enable missing submission deductions
   *
   * Type: boolean
   */
  missing_submission_deduction_enabled: boolean | string;
  /**
   * Amount of percentage points to deduct
   *
   * Type: number
   */
  missing_submission_deduction: number | string;
  /**
   * Whether to enable late submission deductions
   *
   * Type: boolean
   */
  late_submission_deduction_enabled: boolean | string;
  /**
   * Amount of percentage points to deduct per late_submission_interval
   *
   * Type: number
   */
  late_submission_deduction: number | string;
  /** Time interval for late submission deduction */
  late_submission_interval: string;
  /**
   * Whether to enable late submission minimum percent
   *
   * Type: boolean
   */
  late_submission_minimum_percent_enabled: boolean | string;
  /**
   * The minimum score a submission can receive in percentage points
   *
   * Type: number
   */
  late_submission_minimum_percent: number | string;
  /**
   * The time at which this late policy was originally created
   *
   * Format: date-time
   */
  created_at: string;
  /**
   * The time at which this late policy was last modified in any way
   *
   * Format: date-time
   */
  updated_at: string;
};
