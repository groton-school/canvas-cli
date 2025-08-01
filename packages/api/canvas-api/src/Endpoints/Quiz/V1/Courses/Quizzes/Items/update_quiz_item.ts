import { JSONObject } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../../Client.js';
import { QuizItem } from '../../../../../../Resources/NewQuizItems.js';

export type update_quiz_itemPathParameters = {
  /**
   * No description
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  course_id: number | string;
  /**
   * The id of the assignment associated with the quiz.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  assignment_id: number | string;
  /**
   * The id of the item associated with the quiz.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  item_id: number | string;
};

export type update_quiz_itemSearchParameters = Masquerade;

export type update_quiz_itemFormParameters = Masquerade & {
  /**
   * The position of the item within the quiz.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  'item[position]': number | string;
  /**
   * The number of points available to score on this item. Must be positive.
   *
   * Type: number
   *
   * Format: 'float'
   */
  'item[points_possible]': number | string;
  /** The type of the item. */
  'item[entry_type]': string;
  /** The question title. */
  'item[entry][title]': string;
  /** The question stem (rich content). */
  'item[entry][item_body]': string;
  /** Type of calculator the user will have access to during the question. */
  'item[entry][calculator_type]': string;
  /** General feedback to show regardless of answer (rich content). */
  'item[entry][feedback][neutral]': string;
  /** Feedback to show if the question is answered correctly (rich content). */
  'item[entry][feedback][correct]': string;
  /** Feedback to show if the question is answered incorrectly (rich content). */
  'item[entry][feedback][incorrect]': string;
  /**
   * The type of question. One of 'multi-answer', 'matching',
   * 'categorization', 'file-upload', 'formula', 'ordering',
   * 'rich-fill-blank', 'hot-spot', 'choice', 'numeric', 'true-false', or
   * 'essay'. See {Appendix: Question Types} for more info about each type.
   */
  'item[entry][interaction_type_slug]': string;
  /**
   * An object that contains the question data. See {Appendix: Question Types}
   * for more info about this field.
   *
   * Object
   */
  'item[entry][interaction_data]': JSONObject;
  /**
   * An object that contains additional properties for some question types.
   * See {Appendix: Question Types} for more info about this field.
   *
   * Object
   */
  'item[entry][properties]': JSONObject;
  /**
   * An object that describes how to score the question. See {Appendix:
   * Question Types} for more info about this field.
   *
   * Object
   */
  'item[entry][scoring_data]': JSONObject;
  /**
   * Feedback provided for each answer (rich content, only available on
   * 'choice' question types).
   *
   * Object
   */
  'item[entry][answer_feedback]': JSONObject;
  /**
   * The algorithm used to score the question. See {Appendix: Question Types}
   * for more info about this field.
   */
  'item[entry][scoring_algorithm]': string;
};

type Options = {
  pathParams: update_quiz_itemPathParameters;
} & (
  | {
      searchParams?: Partial<update_quiz_itemSearchParameters>;
      params?: Partial<update_quiz_itemFormParameters>;
      strict?: false;
    }
  | {
      searchParams: update_quiz_itemSearchParameters;
      params: update_quiz_itemFormParameters;
      strict: true;
    }
);

/**
 * Update a quiz item
 *
 * Update a single quiz item in a new quiz. Only +QuestionItem+ types can be
 * updated.
 *
 * Nickname: update_quiz_item
 */
export async function update_quiz_item(options: Options) {
  const response = await client().fetchAs<QuizItem>(
    `/api/quiz/v1/courses/{course_id}/quizzes/{assignment_id}/items/{item_id}`,
    {
      method: 'PATCH',
      ...options
    }
  );
  return response;
}
