import { JSONObject } from '@battis/typescript-tricks';

/** A student's result for an outcome */
export type OutcomeResult = {
  /**
   * A unique identifier for this result
   *
   * Type: integer
   */
  id: number | string;
  /**
   * The student's score
   *
   * Type: integer
   */
  score: number | string;
  /**
   * The datetime the resulting OutcomeResult was submitted at, or absent that,
   * when it was assessed.
   *
   * Format: date-time
   */
  submitted_or_assessed_at: string;
  /**
   * Unique identifiers of objects associated with this result
   *
   * Object
   */
  links: JSONObject;
  /**
   * Score's percent of maximum points possible for outcome, scaled to reflect
   * any custom mastery levels that differ from the learning outcome
   *
   * Type: number
   */
  percent: number | string;
};

export type OutcomeRollupScoreLinks = {
  /**
   * The id of the related outcome
   *
   * Type: integer
   */
  outcome: number | string;
};

export type OutcomeRollupScore = {
  /**
   * The rollup score for the outcome, based on the student alignment scores
   * related to the outcome. This could be null if the student has no related
   * scores.
   *
   * Type: integer
   */
  score: number | string;
  /**
   * The number of alignment scores included in this rollup.
   *
   * Type: integer
   */
  count: number | string;
  links: OutcomeRollupScoreLinks;
};

export type OutcomeRollupLinks = {
  /**
   * If an aggregate result was requested, the course field will be present.
   * Otherwise, the user and section field will be present (Optional) The id of
   * the course that this rollup applies to
   *
   * Type: integer
   */
  course: number | string;
  /**
   * (Optional) The id of the user that this rollup applies to
   *
   * Type: integer
   */
  user: number | string;
  /**
   * (Optional) The id of the section the user is in
   *
   * Type: integer
   */
  section: number | string;
};

export type OutcomeRollup = {
  /** An array of OutcomeRollupScore objects */
  scores: OutcomeRollupScore;
  /** The name of the resource for this rollup. For example, the user name. */
  name: string;
  links: OutcomeRollupLinks;
};

/** An asset aligned with this outcome */
export type OutcomeAlignment = {
  /** A unique identifier for this alignment */
  id: string;
  /** The name of this alignment */
  name: string;
  /** (Optional) A URL for details about this alignment */
  html_url: string;
};

/** The full path to an outcome */
export type OutcomePath = {
  /**
   * A unique identifier for this outcome
   *
   * Type: integer
   */
  id: number | string;
  /** An array of OutcomePathPart objects */
  parts: OutcomePathPart;
};

/** An outcome or outcome group */
export type OutcomePathPart = {
  /** The title of the outcome or outcome group */
  name: string;
};
