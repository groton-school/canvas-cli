import { JSONValue } from '@battis/typescript-tricks';

/**
 *
 */
export type GradingPeriod = {
  /**
   * The unique identifier for the grading period.
   *
   * type: integer
   */
  id: number | string;
  /**
   * The title for the grading period.
   *
   *
   */
  title: string;
  /**
   * The start date of the grading period.
   *
   * 

format: 'date-time'
   */
  start_date: string;
  /**
   * The end date of the grading period.
   *
   * 

format: 'date-time'
   */
  end_date: string;
  /**
   * Grades can only be changed before the close date of the grading period.
   *
   * 

format: 'date-time'
   */
  close_date: string;
  /**
   * A weight value that contributes to the overall weight of a grading period set which is used to calculate how much assignments in this period contribute to the total grade
   *
   * type: integer
   */
  weight: number | string;
  /**
   * If true, the grading period's close_date has passed.
   *
   * type: boolean
   */
  is_closed: boolean | string;
};
