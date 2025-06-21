import { JSONObject } from '@battis/typescript-tricks';
import {
  QuestionItemStimulusItem,
  QuestionItemStimulusItemBankEntryItemBankItem
} from '../Overrides.js';

/**
 * Individual items within a quiz, whether they're questions, stimuli, banked
 * content, or question banks.
 */
export type QuizItem = {
  /** The ID of the quiz item */
  id: string;
  /**
   * The position of the item within the quiz. The first item in a quiz is given
   * position 1.
   *
   * Type: integer
   */
  position: number | string;
  /**
   * The number of points available to score on this item
   *
   * Type: number
   */
  points_possible: number | string;
  /** The type of the item. One of 'Item', 'Stimulus', 'BankEntry', or 'Bank'. */
  entry_type: string;
  /**
   * Whether the current user can edit the item -- used internally, no need to
   * set
   *
   * Type: boolean
   */
  entry_editable: boolean | string;
  /**
   * The ID of the stimulus that this item is associated with. null if not
   * associated with any stimuli.
   */
  stimulus_quiz_entry_id: string;
  /**
   * Status of the item. one of 'mutable' or 'immutable'. Used internally, no
   * need to set
   */
  status: string;
  /**
   * Additional properties for the item (currently only populated by items with
   * a BankItem entry)
   */
  properties: ItemProperties;
  /**
   * The specific data associated with the quiz item. These items can be either
   * a QuestionItem, StimulusItem, BankEntryItem, or BankItem, depending on
   * entry_type, and are defined separately
   */
  entry: QuestionItemStimulusItemBankEntryItemBankItem;
};

export type QuestionItem = {
  /** The question title */
  title: string;
  /** The question content (can include html for rich content) */
  item_body: string;
  /**
   * Type of calculator the user will have access to during the question
   * ('none', basic' or 'scientific')
   */
  calculator_type: string;
  /**
   * Correct, incorrect, and general feedback for the question (see
   * QuestionFeedback)
   */
  feedback: QuestionFeedback;
  /**
   * Can be thought of as the question type. One of 'multi-answer', 'matching',
   * 'categorization', 'file-upload', 'formula', 'ordering', 'rich-fill-blank',
   * 'hot-spot', 'choice', 'numeric', 'true-false', 'essay', or 'fill-blank'
   * (deprecated). See Appendix: Question Types for more info about each type.
   */
  interaction_type_slug: string;
  /**
   * An object that contains the question data. See Appendix: Question Types for
   * more info about this field.
   *
   * Object
   */
  interaction_data: JSONObject;
  /**
   * An object that contains additional properties for some question types. See
   * Appendix: Question Types for more info about this field.
   *
   * Object
   */
  properties: JSONObject;
  /**
   * Describes how to score the question. See Appendix: Question Types for more
   * info about this field.
   *
   * Object
   */
  scoring_data: JSONObject;
  /**
   * Feedback provided for each answer (rich content, only available on 'choice'
   * question types)
   *
   * Object
   */
  answer_feedback: JSONObject;
  /**
   * The algorithm used to score the question. See Appendix: Question Types for
   * more info about this field.
   */
  scoring_algorithm: string;
};

export type StimulusItem = {
  /** Stimulus title */
  title: string;
  /** Stimulus content (rich content) */
  body: string;
  /** Additional stimulus instructions */
  instructions: string;
  /** Optional URL; not visible to students */
  source_url: string;
  /** Where the stimulus appears relative to questions ('top' or 'left') */
  orientation: string;
  /**
   * If the stimulus is treated as a passage (text - no question block)
   *
   * Type: boolean
   */
  passage: boolean | string;
};

export type BankEntryItem = {
  /** The type of the item. Either 'Item' or 'Stimulus'. */
  entry_type: string;
  /**
   * Whether the banked item is archived
   *
   * Type: boolean
   */
  archived: boolean | string;
  /** The item (either a QuestionItem or StimulusItem, depending on entry_type) */
  entry: QuestionItemStimulusItem;
};

export type BankItem = {
  /** The title of the bank */
  title: string;
  /**
   * Whether the bank is archived
   *
   * Type: boolean
   */
  archived: boolean | string;
  /**
   * The number of items in the bank, including stimuli
   *
   * Type: integer
   */
  entry_count: number | string;
  /**
   * The number of items in the bank, excluding stimuli
   *
   * Type: integer
   */
  item_entry_count: number | string;
};

export type ItemProperties = {
  /**
   * For items with a BankItem entry - the number of items to randomly select
   * from the bank. null if all items should be included.
   *
   * Type: integer
   */
  sample_num: number | string;
};

export type QuestionFeedback = {
  /** General feedback to show regardless of answer (rich content) */
  neutral: string;
  /** Feedback to show if the question is answered correctly (rich content) */
  correct: string;
  /** Feedback to show if the question is answered incorrectly (rich content) */
  incorrect: string;
};
