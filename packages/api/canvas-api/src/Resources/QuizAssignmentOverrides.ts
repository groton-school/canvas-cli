/** Set of assignment-overridden dates for a quiz. */
export type QuizAssignmentOverrideSet = {
  /** ID of the quiz those dates are for. */
  quiz_id: string;
  /**
   * An array of quiz assignment overrides. For students, this array will always
   * contain a single item which is the set of dates that apply to that student.
   * For teachers and staff, it may contain more.
   */
  due_dates: QuizAssignmentOverride;
  /**
   * An array of all assignment overrides active for the quiz. This is visible
   * only to teachers and staff.
   */
  all_dates: QuizAssignmentOverride;
};

/** Container for set of assignment-overridden dates for a quiz. */
export type QuizAssignmentOverrideSetContainer = {
  /** The QuizAssignmentOverrideSet */
  quiz_assignment_overrides: QuizAssignmentOverrideSet[];
};

/** Set of assignment-overridden dates for a quiz. */
export type QuizAssignmentOverride = {
  /**
   * ID of the assignment override, unless this is the base construct, in which
   * case the 'id' field is omitted.
   *
   * Type: integer
   */
  id: number | string;
  /**
   * The date after which any quiz submission is considered late.
   *
   * Format: date-time
   */
  due_at: string;
  /**
   * Date when the quiz becomes available for taking.
   *
   * Format: date-time
   */
  unlock_at: string;
  /**
   * When the quiz will stop being available for taking. A value of null means
   * it can always be taken.
   *
   * Format: date-time
   */
  lock_at: string;
  /** Title of the section this assignment override is for, if any. */
  title: string;
  /**
   * If this property is present, it means that dates in this structure are not
   * based on an assignment override, but are instead for all students.
   *
   * Type: boolean
   */
  base: boolean | string;
};
