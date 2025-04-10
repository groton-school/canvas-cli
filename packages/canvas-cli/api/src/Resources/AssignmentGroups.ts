import { JSONObject } from '@battis/typescript-tricks';

export type GradingRules = {
  /**
   * Number of lowest scores to be dropped for each user.
   *
   * Type: integer
   */
  drop_lowest: number;
  /**
   * Number of highest scores to be dropped for each user.
   *
   * Type: integer
   */
  drop_highest: number;
  /** Assignment IDs that should never be dropped. */
  never_drop: number[];
};

export type AssignmentGroup = {
  /**
   * The id of the Assignment Group
   *
   * Type: integer
   */
  id: number;
  /** The name of the Assignment Group */
  name: string;
  /**
   * The position of the Assignment Group
   *
   * Type: integer
   */
  position: number;
  /**
   * The weight of the Assignment Group
   *
   * Type: integer
   */
  group_weight: number;
  /** The sis source id of the Assignment Group */
  sis_source_id: string;
  /**
   * The integration data of the Assignment Group
   *
   * Object
   */
  integration_data: JSONObject;
  /**
   * The assignments in this Assignment Group (see the Assignment API for a
   * detailed list of fields)
   */
  assignments: number[];
  /** The grading rules that this Assignment Group has */
  rules: GradingRules;
};
