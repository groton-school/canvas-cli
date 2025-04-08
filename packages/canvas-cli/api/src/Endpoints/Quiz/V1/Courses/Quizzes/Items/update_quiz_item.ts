import {
  JSONObject,
  JSONObject,
  JSONObject,
  JSONObject
} from '@battis/typescript-tricks';
import { client } from '../../../../../../Client.js';
import { QuizItem } from '../../../../../../Resources/NewQuizItems.js';

type Parameters = {
  /**
   * The position of the item within the quiz.
   *
   * Format: 'int64'
   */
  'item[position]': number;
  /**
   * The number of points available to score on this item. Must be positive.
   *
   * Format: 'float'
   */
  'item[points_possible]': number;
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
  parameters: Parameters;
};

/**
 * Update a quiz item
 *
 * Update a single quiz item in a new quiz. Only +QuestionItem+ types can be
 * updated.
 *
 * Nickname: update_quiz_item
 */
export async function update_quiz_item({ parameters }: Options) {
  return await client().fetchAs<QuizItem>(
    `/quiz/v1/courses/{course_id}/quizzes/{assignment_id}/items/{item_id}`,
    { method: 'PATCH', params: parameters }
  );
}
