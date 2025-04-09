/**
 * Blackout dates are used to prevent scheduling assignments on a given date in
 * course pacing.
 */
export type BlackoutDate = {
  /**
   * The ID of the blackout date
   *
   * Type: integer
   */
  id: number;
  /**
   * The context owning the blackout date
   *
   * Type: integer
   */
  context_id: number;
  context_type: string;
  /**
   * The start date of the blackout date
   *
   * Format: date-time
   */
  start_date: string;
  /**
   * The end date of the blackout date
   *
   * Format: date-time
   */
  end_date: string;
  /** Title of the blackout date */
  event_title: string;
};
