import { JSONValue } from '@battis/typescript-tricks';

/**
 *
 */
export type QuizGroup = {
  /**
   * The ID of the question group.
   *
   * type: integer

format: 'int64'
   */
  id: number | string;
  /**
   * The ID of the Quiz the question group belongs to.
   *
   * type: integer

format: 'int64'
   */
  quiz_id: number | string;
  /**
   * The name of the question group.
   *
   *
   */
  name: string;
  /**
   * The number of questions to pick from the group to display to the student.
   *
   * type: integer

format: 'int64'
   */
  pick_count: number | string;
  /**
   * The amount of points allotted to each question in the group.
   *
   * type: integer

format: 'int64'
   */
  question_points: number | string;
  /**
   * The ID of the Assessment question bank to pull questions from.
   *
   * type: integer

format: 'int64'
   */
  assessment_question_bank_id: number | string;
  /**
   * The order in which the question group will be retrieved and displayed.
   *
   * type: integer

format: 'int64'
   */
  position: number | string;
};
