import { RubricRating } from './Rubrics.js';

export type Outcome = {
  /**
   * The ID of the outcome
   *
   * Type: integer
   */
  id: number;
  /** The URL for fetching/updating the outcome. should be treated as opaque */
  url: string;
  /**
   * The context owning the outcome. may be null for global outcomes
   *
   * Type: integer
   */
  context_id: number;
  context_type: string;
  /** Title of the outcome */
  title: string;
  /** Optional friendly name for reporting */
  display_name: string;
  /** Description of the outcome. omitted in the abbreviated form. */
  description: string;
  /** A custom GUID for the learning standard. */
  vendor_guid: string;
  /**
   * Maximum points possible. included only if the outcome embeds a rubric
   * criterion. omitted in the abbreviated form.
   *
   * Type: integer
   */
  points_possible: number;
  /**
   * Points necessary to demonstrate mastery outcomes. included only if the
   * outcome embeds a rubric criterion. omitted in the abbreviated form.
   *
   * Type: integer
   */
  mastery_points: number;
  /** The method used to calculate a students score */
  calculation_method: string;
  /**
   * This defines the variable value used by the calculation_method. included
   * only if calculation_method uses it
   *
   * Type: integer
   */
  calculation_int: number;
  /**
   * Possible ratings for this outcome. included only if the outcome embeds a
   * rubric criterion. omitted in the abbreviated form.
   */
  ratings: RubricRating[];
  /** Whether the current user can update the outcome */
  can_edit: boolean;
  /** Whether the outcome can be unlinked */
  can_unlink: boolean;
  /** Whether this outcome has been used to assess a student */
  assessed: boolean;
  /**
   * Whether updates to this outcome will propagate to unassessed rubrics that
   * have imported it
   */
  has_updateable_rubrics: boolean;
};

export type OutcomeAlignment = {
  /**
   * The id of the aligned learning outcome.
   *
   * Type: integer
   */
  id: number;
  /**
   * The id of the aligned assignment (null for live assessments).
   *
   * Type: integer
   */
  assignment_id: number;
  /**
   * The id of the aligned live assessment (null for assignments).
   *
   * Type: integer
   */
  assessment_id: number;
  /**
   * A string representing the different submission types of an aligned
   * assignment.
   */
  submission_types: string;
  /** The URL for the aligned assignment. */
  url: string;
  /** The title of the aligned assignment. */
  title: string;
};
