import { JSONValue } from '@battis/typescript-tricks';

export type QuizQuestion = {
  /**
   * The ID of the quiz question.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  id: number | string;
  /**
   * The ID of the Quiz the question belongs to.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  quiz_id: number | string;
  /**
   * The order in which the question will be retrieved and displayed.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  position: number | string;
  /** The name of the question. */
  question_name: string;
  /** The type of the question. */
  question_type: string;
  /** The text of the question. */
  question_text: string;
  /**
   * The maximum amount of points possible received for getting this question
   * correct.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  points_possible: number | string;
  /** The comments to display if the student answers the question correctly. */
  correct_comments: string;
  /** The comments to display if the student answers incorrectly. */
  incorrect_comments: string;
  /** The comments to display regardless of how the student answered. */
  neutral_comments: string;
  /** An array of available answers to display to the student. */
  answers: Answer[];
};

export type Answer = {
  /**
   * The unique identifier for the answer. Do not supply if this answer is part
   * of a new question
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  id: number | string;
  /** The text of the answer. */
  answer_text: string;
  /**
   * An integer to determine correctness of the answer. Incorrect answers should
   * be 0, correct answers should be 100.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  answer_weight: number | string;
  /** Specific contextual comments for a particular answer. */
  answer_comments: string;
  /** Used in missing word questions. The text to follow the missing word */
  text_after_answers: string;
  /**
   * Used in matching questions. The static value of the answer that will be
   * displayed on the left for students to match for.
   */
  answer_match_left: string;
  /**
   * Used in matching questions. The correct match for the value given in
   * answer_match_left. Will be displayed in a dropdown with the other
   * answer_match_right values..
   */
  answer_match_right: string;
  /**
   * Used in matching questions. A list of distractors, delimited by new lines (
   * ) that will be seeded with all the answer_match_right values.
   */
  matching_answer_incorrect_matches: string;
  /**
   * Used in numerical questions. Values can be 'exact_answer', 'range_answer',
   * or 'precision_answer'.
   */
  numerical_answer_type: string;
  /**
   * Used in numerical questions of type 'exact_answer'. The value the answer
   * should equal.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  exact: number | string;
  /**
   * Used in numerical questions of type 'exact_answer'. The margin of error
   * allowed for the student's answer.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  margin: number | string;
  /**
   * Used in numerical questions of type 'precision_answer'. The value the
   * answer should equal.
   *
   * Type: number
   *
   * Format: 'float64'
   */
  approximate: number | string;
  /**
   * Used in numerical questions of type 'precision_answer'. The numerical
   * precision that will be used when comparing the student's answer.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  precision: number | string;
  /**
   * Used in numerical questions of type 'range_answer'. The start of the
   * allowed range (inclusive).
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  start: number | string;
  /**
   * Used in numerical questions of type 'range_answer'. The end of the allowed
   * range (inclusive).
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  end: number | string;
  /**
   * Used in fill in multiple blank and multiple dropdowns questions.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  blank_id: number | string;
};
