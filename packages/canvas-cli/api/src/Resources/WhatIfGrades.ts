export type Grade = {
  /** The grade for the course */
  grade: number;
  /** The total points earned in the course */
  total: number;
  /** The total points possible for the course */
  possible: number;
  /** The dropped grades for the course */
  dropped: string[];
};

export type AssignmentGroupGrade = {
  /**
   * The ID of the Assignment Group
   *
   * Type: integer
   */
  id: number;
  /**
   * The global ID of the Assignment Group
   *
   * Type: integer
   */
  global_id: number;
  /** The score for the Assignment Group */
  score: number;
  /** The total points possible for the Assignment Group */
  possible: number;
  /** The weight for the Assignment Group */
  weight: number;
  /** The grade for the Assignment Group */
  grade: number;
  /** The dropped grades for the Assignment Group */
  dropped: string[];
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
  id: number;
  /** The score the student wants to test */
  student_entered_score: string;
};
