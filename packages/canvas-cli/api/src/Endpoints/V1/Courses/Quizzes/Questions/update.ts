import { client } from '../../../../../Client.js';
import {
  Answer,
  QuizQuestion
} from '../../../../../Resources/QuizQuestions.js';

export type updatePathParameters = {
  /** ID */
  course_id: string;
  /**
   * The associated quiz's unique identifier.
   *
   * Format: 'int64'
   */
  quiz_id: number;
  /**
   * The quiz question's unique identifier.
   *
   * Format: 'int64'
   */
  id: number;
};

export type updateFormParameters = {
  /** The name of the question. */
  'question[question_name]': string;
  /** The text of the question. */
  'question[question_text]': string;
  /**
   * The id of the quiz group to assign the question to.
   *
   * Format: 'int64'
   */
  'question[quiz_group_id]': number;
  /**
   * The type of question. Multiple optional fields depend upon the type of
   * question to be used.
   */
  'question[question_type]': string;
  /**
   * The order in which the question will be displayed in the quiz in relation
   * to other questions.
   *
   * Format: 'int64'
   */
  'question[position]': number;
  /**
   * The maximum amount of points received for answering this question
   * correctly.
   *
   * Format: 'int64'
   */
  'question[points_possible]': number;
  /** The comment to display if the student answers the question correctly. */
  'question[correct_comments]': string;
  /** The comment to display if the student answers incorrectly. */
  'question[incorrect_comments]': string;
  /** The comment to display regardless of how the student answered. */
  'question[neutral_comments]': string;
  /** No description */
  'question[text_after_answers]': string;
  /** No description */
  'question[answers]': Answer;
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      params: updateFormParameters;
      strict: true;
    }
);

/**
 * Update an existing quiz question
 *
 * Updates an existing quiz question for this quiz
 *
 * Nickname: update_existing_quiz_question
 */
export async function update(options: Options) {
  return await client().fetchAs<QuizQuestion>(
    `/api/v1/courses/{course_id}/quizzes/{quiz_id}/questions/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
}
