import { JSONValue } from '@battis/typescript-tricks';

/**
 *
 */
export type LatePolicy = {
  /**
   * the unique identifier for the late policy
   *
   * type: integer
   */
  id: number | string;
  /**
   * the unique identifier for the course
   *
   * type: integer
   */
  course_id: number | string;
  /**
   * whether to enable missing submission deductions
   *
   * type: boolean
   */
  missing_submission_deduction_enabled: boolean | string;
  /**
   * amount of percentage points to deduct
   *
   * type: number
   */
  missing_submission_deduction: number | string;
  /**
   * whether to enable late submission deductions
   *
   * type: boolean
   */
  late_submission_deduction_enabled: boolean | string;
  /**
   * amount of percentage points to deduct per late_submission_interval
   *
   * type: number
   */
  late_submission_deduction: number | string;
  /**
   * time interval for late submission deduction
   *
   *
   */
  late_submission_interval: string;
  /**
   * whether to enable late submission minimum percent
   *
   * type: boolean
   */
  late_submission_minimum_percent_enabled: boolean | string;
  /**
   * the minimum score a submission can receive in percentage points
   *
   * type: number
   */
  late_submission_minimum_percent: number | string;
  /**
   * the time at which this late policy was originally created
   *
   * format: date-time
   */
  created_at: string;
  /**
   * the time at which this late policy was last modified in any way
   *
   * format: date-time
   */
  updated_at: string;
};
