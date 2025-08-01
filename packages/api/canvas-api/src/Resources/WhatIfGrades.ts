export type Grade = {
  /**
   * The grade for the course
   *
   * Type: number
   */
  grade: number | string;
  /**
   * The total points earned in the course
   *
   * Type: number
   */
  total: number | string;
  /**
   * The total points possible for the course
   *
   * Type: number
   */
  possible: number | string;
  /** The dropped grades for the course */
  dropped: unknown;
};

export type AssignmentGroupGrade = {
  /**
   * The ID of the Assignment Group
   *
   * Type: integer
   */
  id: number | string;
  /**
   * The global ID of the Assignment Group
   *
   * Type: integer
   */
  global_id: number | string;
  /**
   * The score for the Assignment Group
   *
   * Type: number
   */
  score: number | string;
  /**
   * The total points possible for the Assignment Group
   *
   * Type: number
   */
  possible: number | string;
  /**
   * The weight for the Assignment Group
   *
   * Type: number
   */
  weight: number | string;
  /**
   * The grade for the Assignment Group
   *
   * Type: number
   */
  grade: number | string;
  /** The dropped grades for the Assignment Group */
  dropped: unknown;
};

export type GradeGroup = {
  submission_id: AssignmentGroupGrade;
};

export type Grades = {
  current: Grade;
  current_groups: GradeGroup;
  final: Grade;
  final_groups: GradeGroup;
};

export type Submission = {
  /**
   * The ID of the submission
   *
   * Type: integer
   */
  id: number | string;
  /** The score the student wants to test */
  student_entered_score: string;
};
