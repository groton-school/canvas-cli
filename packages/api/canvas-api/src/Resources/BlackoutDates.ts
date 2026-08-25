import { JSONValue } from '@battis/typescript-tricks';

/**
 * Blackout dates are used to prevent scheduling assignments on a given date in course pacing.
 */
export type BlackoutDate = {
  /**
   * the ID of the blackout date
   *
   * type: integer
   */
  id: number | string;
  /**
   * the context owning the blackout date
   *
   * type: integer
   */
  context_id: number | string;
  /**
   *
   *
   *
   */
  context_type: string;
  /**
   * the start date of the blackout date
   *
   * format: date-time
   */
  start_date: string;
  /**
   * the end date of the blackout date
   *
   * format: date-time
   */
  end_date: string;
  /**
   * title of the blackout date
   *
   *
   */
  event_title: string;
};
