export type LatePolicy = {
  /**
   * The unique identifier for the late policy
   *
   * Type: integer
   */
  id: number;
  /**
   * The unique identifier for the course
   *
   * Type: integer
   */
  course_id: number;
  /** Whether to enable missing submission deductions */
  missing_submission_deduction_enabled: boolean;
  /** Amount of percentage points to deduct */
  missing_submission_deduction: number;
  /** Whether to enable late submission deductions */
  late_submission_deduction_enabled: boolean;
  /** Amount of percentage points to deduct per late_submission_interval */
  late_submission_deduction: number;
  /** Time interval for late submission deduction */
  late_submission_interval: string;
  /** Whether to enable late submission minimum percent */
  late_submission_minimum_percent_enabled: boolean;
  /** The minimum score a submission can receive in percentage points */
  late_submission_minimum_percent: number;
  /**
   * The time at which this late policy was originally created
   *
   * Format: 'date-time'
   */
  created_at: string;
  /**
   * The time at which this late policy was last modified in any way
   *
   * Format: 'date-time'
   */
  updated_at: string;
};
