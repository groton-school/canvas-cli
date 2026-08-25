import { JSONObject, JSONValue } from '@battis/typescript-tricks';

/**
 *
 */
export type Rubric = {
  /**
   * the ID of the rubric
   *
   * type: integer
   */
  id: number | string;
  /**
   * title of the rubric
   *
   *
   */
  title: string;
  /**
   * the context owning the rubric
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
   *
   *
   * type: integer
   */
  points_possible: number | string;
  /**
   *
   *
   * type: boolean
   */
  reusable: boolean | string;
  /**
   *
   *
   * type: boolean
   */
  read_only: boolean | string;
  /**
   * whether or not free-form comments are used
   *
   * type: boolean
   */
  free_form_criterion_comments: boolean | string;
  /**
   *
   *
   * type: boolean
   */
  hide_score_total: boolean | string;
  /**
   * An array with all of this Rubric's grading Criteria
   *
   *
   */
  data: RubricCriterion[];
  /**
   * If an assessment type is included in the 'include' parameter, includes an array of rubric assessment objects for a given rubric, based on the assessment type requested. If the user does not request an assessment type this key will be absent.
   *
   *
   */
  assessments: RubricAssessment[];
  /**
   * If an association type is included in the 'include' parameter, includes an array of rubric association objects for a given rubric, based on the association type requested. If the user does not request an association type this key will be absent.
   *
   *
   */
  associations: RubricAssociation[];
};

/**
 *
 */
export type RubricCriterion = {
  /**
   * the ID of the criterion
   *
   *
   */
  id: string;
  /**
   *
   *
   *
   */
  description: string;
  /**
   *
   *
   *
   */
  long_description: string;
  /**
   *
   *
   * type: integer
   */
  points: number | string;
  /**
   *
   *
   * type: boolean
   */
  criterion_use_range: boolean | string;
  /**
   * the possible ratings for this Criterion
   *
   *
   */
  ratings: RubricRating[];
};

/**
 *
 */
export type RubricRating = {
  /**
   *
   *
   *
   */
  id: string;
  /**
   *
   *
   *
   */
  criterion_id: string;
  /**
   *
   *
   *
   */
  description: string;
  /**
   *
   *
   *
   */
  long_description: string;
  /**
   *
   *
   * type: integer
   */
  points: number | string;
};

/**
 *
 */
export type RubricAssessment = {
  /**
   * the ID of the rubric
   *
   * type: integer
   */
  id: number | string;
  /**
   * the rubric the assessment belongs to
   *
   * type: integer
   */
  rubric_id: number | string;
  /**
   *
   *
   * type: integer
   */
  rubric_association_id: number | string;
  /**
   *
   *
   * type: integer
   */
  score: number | string;
  /**
   * the object of the assessment
   *
   *
   */
  artifact_type: string;
  /**
   * the id of the object of the assessment
   *
   * type: integer
   */
  artifact_id: number | string;
  /**
   * the current number of attempts made on the object of the assessment
   *
   * type: integer
   */
  artifact_attempt: number | string;
  /**
   * the type of assessment. values will be either 'grading', 'peer_review', or 'provisional_grade'
   *
   *
   */
  assessment_type: string;
  /**
   * user id of the person who made the assessment
   *
   * type: integer
   */
  assessor_id: number | string;
  /**
   * (Optional) If 'full' is included in the 'style' parameter, returned assessments will have their full details contained in their data hash. If the user does not request a style, this key will be absent.
   *
   *
   */
  data: JSONObject[];
  /**
   * (Optional) If 'comments_only' is included in the 'style' parameter, returned assessments will include only the comments portion of their data hash. If the user does not request a style, this key will be absent.
   *
   *
   */
  comments: string[];
};

/**
 *
 */
export type RubricAssociation = {
  /**
   * the ID of the association
   *
   * type: integer
   */
  id: number | string;
  /**
   * the ID of the rubric
   *
   * type: integer
   */
  rubric_id: number | string;
  /**
   * the ID of the object this association links to
   *
   * type: integer
   */
  association_id: number | string;
  /**
   * the type of object this association links to
   *
   *
   */
  association_type: string;
  /**
   * Whether or not the associated rubric is used for grade calculation
   *
   * type: boolean
   */
  use_for_grading: boolean | string;
  /**
   *
   *
   *
   */
  summary_data: string;
  /**
   * Whether or not the association is for grading (and thus linked to an assignment) or if it's to indicate the rubric should appear in its context. Values will be grading or bookmark.
   *
   *
   */
  purpose: string;
  /**
   * Whether or not the score total is displayed within the rubric. This option is only available if the rubric is not used for grading.
   *
   * type: boolean
   */
  hide_score_total: boolean | string;
  /**
   *
   *
   * type: boolean
   */
  hide_points: boolean | string;
  /**
   *
   *
   * type: boolean
   */
  hide_outcome_results: boolean | string;
};
