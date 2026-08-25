import { JSONValue } from '@battis/typescript-tricks';

/**
 *
 */
export type PollChoice = {
  /**
   * The unique identifier for the poll choice.
   *
   * type: integer
   */
  id: number | string;
  /**
   * The id of the poll this poll choice belongs to.
   *
   * type: integer
   */
  poll_id: number | string;
  /**
   * Specifies whether or not this poll choice is a 'correct' choice.
   *
   * type: boolean
   */
  is_correct: boolean | string;
  /**
   * The text of the poll choice.
   *
   *
   */
  text: string;
  /**
   * The order of the poll choice in relation to it's sibling poll choices.
   *
   * type: integer
   */
  position: number | string;
};
