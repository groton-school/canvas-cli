import { JSONObject } from '@battis/typescript-tricks';

export type Rubric = {
  /**
   * The ID of the rubric
   *
   * Type: integer
   */
  id: number;
  /** Title of the rubric */
  title: string;
  /**
   * The context owning the rubric
   *
   * Type: integer
   */
  context_id: number;
  context_type: string;
  /** Type: integer */
  points_possible: number;
  reusable: boolean;
  read_only: boolean;
  /** Whether or not free-form comments are used */
  free_form_criterion_comments: boolean;
  hide_score_total: boolean;
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
  points: number;
  criterion_use_range: boolean;
  /** The possible ratings for this Criterion */
  ratings: RubricRating[];
};

export type RubricRating = {
  id: string;
  criterion_id: string;
  description: string;
  long_description: string;
  /** Type: integer */
  points: number;
};

export type RubricAssessment = {
  /**
   * The ID of the rubric
   *
   * Type: integer
   */
  id: number;
  /**
   * The rubric the assessment belongs to
   *
   * Type: integer
   */
  rubric_id: number;
  /** Type: integer */
  rubric_association_id: number;
  /** Type: integer */
  score: number;
  /** The object of the assessment */
  artifact_type: string;
  /**
   * The id of the object of the assessment
   *
   * Type: integer
   */
  artifact_id: number;
  /**
   * The current number of attempts made on the object of the assessment
   *
   * Type: integer
   */
  artifact_attempt: number;
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
  assessor_id: number;
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
  id: number;
  /**
   * The ID of the rubric
   *
   * Type: integer
   */
  rubric_id: number;
  /**
   * The ID of the object this association links to
   *
   * Type: integer
   */
  association_id: number;
  /** The type of object this association links to */
  association_type: string;
  /** Whether or not the associated rubric is used for grade calculation */
  use_for_grading: boolean;
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
   */
  hide_score_total: boolean;
  hide_points: boolean;
  hide_outcome_results: boolean;
};
