import { JSONObject, JSONValue } from '@battis/typescript-tricks';
import {
  QuestionItemStimulusItem,
  QuestionItemStimulusItemBankEntryItemBankItem
} from '../Overrides.js';

/**
 * Individual items within a quiz, whether they're questions, stimuli, banked content, or question banks.
 */
export type QuizItem = {
  /**
   * the ID of the quiz item
   *
   *
   */
  id: string;
  /**
   * the position of the item within the quiz. The first item in a quiz is given position 1.
   *
   * type: integer
   */
  position: number | string;
  /**
   * the number of points available to score on this item
   *
   * type: number
   */
  points_possible: number | string;
  /**
   * the type of the item. One of 'Item', 'Stimulus', 'BankEntry', or 'Bank'.
   *
   *
   */
  entry_type: string;
  /**
   * whether the current user can edit the item -- used internally, no need to set
   *
   * type: boolean
   */
  entry_editable: boolean | string;
  /**
   * the ID of the stimulus that this item is associated with. null if not associated with any stimuli.
   *
   *
   */
  stimulus_quiz_entry_id: string;
  /**
   * status of the item. one of 'mutable' or 'immutable'.  Used internally, no need to set
   *
   *
   */
  status: string;
  /**
   * additional properties for the item (currently only populated by items with a BankItem entry)
   *
   *
   */
  properties: ItemProperties;
  /**
   * the specific data associated with the quiz item.  These items can be either a
       QuestionItem, StimulusItem, BankEntryItem, or BankItem, depending on entry_type, and are defined
       separately
   *
   * 
   */
  entry: QuestionItemStimulusItemBankEntryItemBankItem;
};

/**
 *
 */
export type QuestionItem = {
  /**
   * the question title
   *
   *
   */
  title: string;
  /**
   * the question content (can include html for rich content)
   *
   *
   */
  item_body: string;
  /**
   * type of calculator the user will have access to during the question ('none', basic' or 'scientific')
   *
   *
   */
  calculator_type: string;
  /**
   * correct, incorrect, and general feedback for the question (see QuestionFeedback)
   *
   *
   */
  feedback: QuestionFeedback;
  /**
   * can be thought of as the question type. One of 'multi-answer', 'matching', 'categorization',
      'file-upload', 'formula', 'ordering', 'rich-fill-blank', 'hot-spot', 'choice', 'numeric', 'true-false',
      'essay', or 'fill-blank' (deprecated). See Appendix: Question Types for more info about each type.
   *
   * 
   */
  interaction_type_slug: string;
  /**
   * an object that contains the question data. See Appendix: Question Types for more info about this field.
   *
   * object
   */
  interaction_data: JSONObject;
  /**
   * an object that contains additional properties for some question types. See Appendix: Question Types for more info about this field.
   *
   * object
   */
  properties: JSONObject;
  /**
   * describes how to score the question. See Appendix: Question Types for more info about this field.
   *
   * object
   */
  scoring_data: JSONObject;
  /**
   * feedback provided for each answer (rich content, only available on 'choice' question types)
   *
   * object
   */
  answer_feedback: JSONObject;
  /**
   * the algorithm used to score the question. See Appendix: Question Types for more info about this field.
   *
   *
   */
  scoring_algorithm: string;
};

/**
 *
 */
export type StimulusItem = {
  /**
   * stimulus title
   *
   *
   */
  title: string;
  /**
   * stimulus content (rich content)
   *
   *
   */
  body: string;
  /**
   * additional stimulus instructions
   *
   *
   */
  instructions: string;
  /**
   * optional URL; not visible to students
   *
   *
   */
  source_url: string;
  /**
   * where the stimulus appears relative to questions ('top' or 'left')
   *
   *
   */
  orientation: string;
  /**
   * if the stimulus is treated as a passage (text - no question block)
   *
   * type: boolean
   */
  passage: boolean | string;
};

/**
 *
 */
export type BankEntryItem = {
  /**
   * the type of the item. Either 'Item' or 'Stimulus'.
   *
   *
   */
  entry_type: string;
  /**
   * whether the banked item is archived
   *
   * type: boolean
   */
  archived: boolean | string;
  /**
   * the item (either a QuestionItem or StimulusItem, depending on entry_type)
   *
   *
   */
  entry: QuestionItemStimulusItem;
};

/**
 *
 */
export type BankItem = {
  /**
   * the title of the bank
   *
   *
   */
  title: string;
  /**
   * whether the bank is archived
   *
   * type: boolean
   */
  archived: boolean | string;
  /**
   * the number of items in the bank, including stimuli
   *
   * type: integer
   */
  entry_count: number | string;
  /**
   * the number of items in the bank, excluding stimuli
   *
   * type: integer
   */
  item_entry_count: number | string;
};

/**
 *
 */
export type ItemProperties = {
  /**
   * for items with a BankItem entry - the number of items to randomly select from the bank. null if all items should be included.
   *
   * type: integer
   */
  sample_num: number | string;
};

/**
 *
 */
export type QuestionFeedback = {
  /**
   * general feedback to show regardless of answer (rich content)
   *
   *
   */
  neutral: string;
  /**
   * feedback to show if the question is answered correctly (rich content)
   *
   *
   */
  correct: string;
  /**
   * feedback to show if the question is answered incorrectly (rich content)
   *
   *
   */
  incorrect: string;
};
