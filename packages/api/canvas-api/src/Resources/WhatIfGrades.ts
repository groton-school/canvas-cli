import { JSONValue } from '@battis/typescript-tricks';

/**
 *
 */
export type Grade = {
  /**
   * The grade for the course
   *
   * type: number
   */
  grade: number | string;
  /**
   * The total points earned in the course
   *
   * type: number
   */
  total: number | string;
  /**
   * The total points possible for the course
   *
   * type: number
   */
  possible: number | string;
  /**
   * The dropped grades for the course
   *
   *
   */
  dropped: JSONValue;
};

/**
 *
 */
export type AssignmentGroupGrade = {
  /**
   * The ID of the Assignment Group
   *
   * type: integer
   */
  id: number | string;
  /**
   * The global ID of the Assignment Group
   *
   * type: integer
   */
  global_id: number | string;
  /**
   * The score for the Assignment Group
   *
   * type: number
   */
  score: number | string;
  /**
   * The total points possible for the Assignment Group
   *
   * type: number
   */
  possible: number | string;
  /**
   * The weight for the Assignment Group
   *
   * type: number
   */
  weight: number | string;
  /**
   * The grade for the Assignment Group
   *
   * type: number
   */
  grade: number | string;
  /**
   * The dropped grades for the Assignment Group
   *
   *
   */
  dropped: JSONValue;
};

/**
 *
 */
export type GradeGroup = {
  /**
   *
   *
   *
   */
  submission_id: AssignmentGroupGrade;
};

/**
 *
 */
export type Grades = {
  /**
   *
   *
   *
   */
  current: Grade;
  /**
   *
   *
   *
   */
  current_groups: GradeGroup;
  /**
   *
   *
   *
   */
  final: Grade;
  /**
   *
   *
   *
   */
  final_groups: GradeGroup;
};

/**
 *
 */
export type Submission = {
  /**
   * The ID of the submission
   *
   * type: integer
   */
  id: number | string;
  /**
   * The score the student wants to test
   *
   *
   */
  student_entered_score: string;
};
