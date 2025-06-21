import { JSONObject } from '@battis/typescript-tricks';

export type Rubric = {
  /**
   * The ID of the rubric
   *
   * Type: integer
   */
  id: number | string;
  /** Title of the rubric */
  title: string;
  /**
   * The context owning the rubric
   *
   * Type: integer
   */
  context_id: number | string;
  context_type: string;
  /** Type: integer */
  points_possible: number | string;
  /** Type: boolean */
  reusable: boolean | string;
  /** Type: boolean */
  read_only: boolean | string;
  /**
   * Whether or not free-form comments are used
   *
   * Type: boolean
   */
  free_form_criterion_comments: boolean | string;
  /** Type: boolean */
  hide_score_total: boolean | string;
  /** An array with all of this Rubric's grading Criteria */
  data: RubricCriterion[];
  /**
   * If an assessment type is included in the 'include' parameter, includes an
   * array of rubric assessment objects for a given rubric, based on the
   * assessment type requested. If the user does not request an assessment type
   * this key will be absent.
   */
  assessments: RubricAssessment[];
  /**
   * If an association type is included in the 'include' parameter, includes an
   * array of rubric association objects for a given rubric, based on the
   * association type requested. If the user does not request an association
   * type this key will be absent.
   */
  associations: RubricAssociation[];
};

export type RubricCriterion = {
  /** The ID of the criterion */
  id: string;
  description: string;
  long_description: string;
  /** Type: integer */
  points: number | string;
  /** Type: boolean */
  criterion_use_range: boolean | string;
  /** The possible ratings for this Criterion */
  ratings: RubricRating[];
};

export type RubricRating = {
  id: string;
  criterion_id: string;
  description: string;
  long_description: string;
  /** Type: integer */
  points: number | string;
};

export type RubricAssessment = {
  /**
   * The ID of the rubric
   *
   * Type: integer
   */
  id: number | string;
  /**
   * The rubric the assessment belongs to
   *
   * Type: integer
   */
  rubric_id: number | string;
  /** Type: integer */
  rubric_association_id: number | string;
  /** Type: integer */
  score: number | string;
  /** The object of the assessment */
  artifact_type: string;
  /**
   * The id of the object of the assessment
   *
   * Type: integer
   */
  artifact_id: number | string;
  /**
   * The current number of attempts made on the object of the assessment
   *
   * Type: integer
   */
  artifact_attempt: number | string;
  /**
   * The type of assessment. values will be either 'grading', 'peer_review', or
   * 'provisional_grade'
   */
  assessment_type: string;
  /**
   * User id of the person who made the assessment
   *
   * Type: integer
   */
  assessor_id: number | string;
  /**
   * (Optional) If 'full' is included in the 'style' parameter, returned
   * assessments will have their full details contained in their data hash. If
   * the user does not request a style, this key will be absent.
   */
  data: JSONObject[];
  /**
   * (Optional) If 'comments_only' is included in the 'style' parameter,
   * returned assessments will include only the comments portion of their data
   * hash. If the user does not request a style, this key will be absent.
   */
  comments: string[];
};

export type RubricAssociation = {
  /**
   * The ID of the association
   *
   * Type: integer
   */
  id: number | string;
  /**
   * The ID of the rubric
   *
   * Type: integer
   */
  rubric_id: number | string;
  /**
   * The ID of the object this association links to
   *
   * Type: integer
   */
  association_id: number | string;
  /** The type of object this association links to */
  association_type: string;
  /**
   * Whether or not the associated rubric is used for grade calculation
   *
   * Type: boolean
   */
  use_for_grading: boolean | string;
  summary_data: string;
  /**
   * Whether or not the association is for grading (and thus linked to an
   * assignment) or if it's to indicate the rubric should appear in its context.
   * Values will be grading or bookmark.
   */
  purpose: string;
  /**
   * Whether or not the score total is displayed within the rubric. This option
   * is only available if the rubric is not used for grading.
   *
   * Type: boolean
   */
  hide_score_total: boolean | string;
  /** Type: boolean */
  hide_points: boolean | string;
  /** Type: boolean */
  hide_outcome_results: boolean | string;
};
