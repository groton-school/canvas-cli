export type GradingSchemeEntry = {
  /**
   * The name for an entry value within a GradingStandard that describes the
   * range of the value
   */
  name: string;
  /**
   * The value for the name of the entry within a GradingStandard. The entry
   * represents the lower bound of the range for the entry. This range includes
   * the value up to the next entry in the GradingStandard, or the maximum value
   * for the scheme if there is no upper bound. The lowest value will have a
   * lower bound range of 0.
   *
   * Type: integer
   */
  value: number;
  /**
   * The value that will be used to compare against a grade. For percentage
   * based grading schemes, this is a number from 0 - 100 representing a
   * percent. For point based grading schemes, this is the lower bound of points
   * to achieve the grade.
   *
   * Type: integer
   */
  calculated_value: number;
};

export type GradingStandard = {
  /** The title of the grading standard */
  title: string;
  /**
   * The id of the grading standard
   *
   * Type: integer
   */
  id: number;
  /** The context this standard is associated with, either 'Account' or 'Course' */
  context_type: string;
  /**
   * The id for the context either the Account or Course id
   *
   * Type: integer
   */
  context_id: number;
  /** Whether this is a points-based standard */
  points_based: boolean;
  /**
   * The factor by which to scale a score. 1 for percentage based schemss and
   * the max value of points for points based schemes. This number cannot be
   * changed for percentage based schemes.
   */
  scaling_factor: number;
  /**
   * A list of GradingSchemeEntry that make up the Grading Standard as an array
   * of values with the scheme name and value
   */
  grading_scheme: GradingSchemeEntry[];
};
