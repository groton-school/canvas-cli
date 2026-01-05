import { JSONValue } from '@battis/typescript-tricks';

export type GradingPeriodSets = {
  /** The title of the grading period set. */
  title: string;
  /**
   * If true, the grading periods in the set are weighted.
   *
   * Type: boolean
   */
  weighted: boolean | string;
  /**
   * If true, the totals for all grading periods in the set are displayed.
   *
   * Type: boolean
   */
  display_totals_for_all_grading_periods: boolean | string;
};
