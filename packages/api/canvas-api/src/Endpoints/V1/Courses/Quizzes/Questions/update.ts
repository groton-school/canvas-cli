import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import {
  Answer,
  QuizQuestion
} from '../../../../../Resources/QuizQuestions.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * The associated quiz's unique identifier.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  quiz_id: number | string;
  /**
   * The quiz question's unique identifier.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  id: number | string;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /** The name of the question. */
  'question[question_name]': string;
  /** The text of the question. */
  'question[question_text]': string;
  /**
   * The id of the quiz group to assign the question to.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  'question[quiz_group_id]': number | string;
  /**
   * The type of question. Multiple optional fields depend upon the type of
   * question to be used.
   */
  'question[question_type]': string;
  /**
   * The order in which the question will be displayed in the quiz in relation
   * to other questions.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  'question[position]': number | string;
  /**
   * The maximum amount of points received for answering this question
   * correctly.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  'question[points_possible]': number | string;
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

type Options = (
  | {
      path: updatePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: updatePathParameters;
    }
) &
  (
    | {
        query?: Partial<updateSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<updateSearchParameters>;
        body?: Partial<updateFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<updateFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: updateSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: updateSearchParameters;
          }
      ) &
        (
          | {
              body: updateFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: updateFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Update an existing quiz question
 *
 * Updates an existing quiz question for this quiz
 *
 * Nickname: update_existing_quiz_question
 */
export async function update(options: Options) {
  const response = await client().fetchAs<QuizQuestion>(
    `/api/v1/courses/{course_id}/quizzes/{quiz_id}/questions/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
