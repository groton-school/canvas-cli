import { JSONValue } from '@battis/typescript-tricks';
import { RubricRating } from './Rubrics.js';

/**
 *
 */
export type Outcome = {
  /**
   * the ID of the outcome
   *
   * type: integer
   */
  id: number | string;
  /**
   * the URL for fetching/updating the outcome. should be treated as opaque
   *
   *
   */
  url: string;
  /**
   * the context owning the outcome. may be null for global outcomes
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
   * title of the outcome
   *
   *
   */
  title: string;
  /**
   * Optional friendly name for reporting
   *
   *
   */
  display_name: string;
  /**
   * description of the outcome. omitted in the abbreviated form.
   *
   *
   */
  description: string;
  /**
   * A custom GUID for the learning standard.
   *
   *
   */
  vendor_guid: string;
  /**
   * maximum points possible. included only if the outcome embeds a rubric criterion. omitted in the abbreviated form.
   *
   * type: integer
   */
  points_possible: number | string;
  /**
   * points necessary to demonstrate mastery outcomes. included only if the outcome embeds a rubric criterion. omitted in the abbreviated form.
   *
   * type: integer
   */
  mastery_points: number | string;
  /**
   * the method used to calculate a students score
   *
   *
   */
  calculation_method: string;
  /**
   * this defines the variable value used by the calculation_method. included only if calculation_method uses it
   *
   * type: integer
   */
  calculation_int: number | string;
  /**
   * possible ratings for this outcome. included only if the outcome embeds a rubric criterion. omitted in the abbreviated form.
   *
   *
   */
  ratings: RubricRating[];
  /**
   * whether the current user can update the outcome
   *
   * type: boolean
   */
  can_edit: boolean | string;
  /**
   * whether the outcome can be unlinked
   *
   * type: boolean
   */
  can_unlink: boolean | string;
  /**
   * whether this outcome has been used to assess a student
   *
   * type: boolean
   */
  assessed: boolean | string;
  /**
   * whether updates to this outcome will propagate to unassessed rubrics that have imported it
   *
   * type: boolean
   */
  has_updateable_rubrics: boolean | string;
};

/**
 *
 */
export type OutcomeAlignment = {
  /**
   * the id of the aligned learning outcome.
   *
   * type: integer
   */
  id: number | string;
  /**
   * the id of the aligned assignment (null for live assessments).
   *
   * type: integer
   */
  assignment_id: number | string;
  /**
   * the id of the aligned live assessment (null for assignments).
   *
   * type: integer
   */
  assessment_id: number | string;
  /**
   * a string representing the different submission types of an aligned assignment.
   *
   *
   */
  submission_types: string;
  /**
   * the URL for the aligned assignment.
   *
   *
   */
  url: string;
  /**
   * the title of the aligned assignment.
   *
   *
   */
  title: string;
};
