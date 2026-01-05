import { JSONObject, JSONValue } from '@battis/typescript-tricks';

export type GradingRules = {
  /**
   * Number of lowest scores to be dropped for each user.
   *
   * Type: integer
   */
  drop_lowest: number | string;
  /**
   * Number of highest scores to be dropped for each user.
   *
   * Type: integer
   */
  drop_highest: number | string;
  /** Assignment IDs that should never be dropped. */
  never_drop: number | string[];
};

export type AssignmentGroup = {
  /**
   * The id of the Assignment Group
   *
   * Type: integer
   */
  id: number | string;
  /** The name of the Assignment Group */
  name: string;
  /**
   * The position of the Assignment Group
   *
   * Type: integer
   */
  position: number | string;
  /**
   * The weight of the Assignment Group
   *
   * Type: integer
   */
  group_weight: number | string;
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
  assignments: number | string[];
  /** The grading rules that this Assignment Group has */
  rules: GradingRules;
};
