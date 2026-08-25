import { JSONObject, JSONValue } from '@battis/typescript-tricks';

/**
 *
 */
export type GradingRules = {
  /**
   * Number of lowest scores to be dropped for each user.
   *
   * type: integer
   */
  drop_lowest: number | string;
  /**
   * Number of highest scores to be dropped for each user.
   *
   * type: integer
   */
  drop_highest: number | string;
  /**
   * Assignment IDs that should never be dropped.
   *
   *
   */
  never_drop: number | string[];
};

/**
 *
 */
export type AssignmentGroup = {
  /**
   * the id of the Assignment Group
   *
   * type: integer
   */
  id: number | string;
  /**
   * the name of the Assignment Group
   *
   *
   */
  name: string;
  /**
   * the position of the Assignment Group
   *
   * type: integer
   */
  position: number | string;
  /**
   * the weight of the Assignment Group
   *
   * type: integer
   */
  group_weight: number | string;
  /**
   * the sis source id of the Assignment Group
   *
   *
   */
  sis_source_id: string;
  /**
   * the integration data of the Assignment Group
   *
   * object
   */
  integration_data: JSONObject;
  /**
   * the assignments in this Assignment Group (see the Assignment API for a detailed list of fields)
   *
   *
   */
  assignments: number | string[];
  /**
   * the grading rules that this Assignment Group has
   *
   *
   */
  rules: GradingRules;
};
