export type Grader = {
  /**
   * The user_id of the user who graded the contained submissions
   *
   * Type: integer
   */
  id: number;
  /** The name of the user who graded the contained submissions */
  name: string;
  /**
   * The assignment groups for all submissions in this response that were graded
   * by this user. The details are not nested inside here, but the fact that an
   * assignment is present here means that the grader did grade submissions for
   * this assignment on the contextual date. You can use the id of a grader and
   * of an assignment to make another API call to find all submissions for a
   * grader/assignment combination on a given date.
   */
  assignments: number[];
};

export type Day = {
  /**
   * The date represented by this entry
   *
   * Format: date-time
   */
  date: string;
  /**
   * An array of the graders who were responsible for the submissions in this
   * response. the submissions are grouped according to the person who graded
   * them and the assignment they were submitted for.
   *
   * Type: integer
   */
  graders: number;
};

/**
 * A SubmissionVersion object contains all the fields that a Submission object
 * does, plus additional fields prefixed with current_* new_* and previous_*
 * described below.
 */
export type SubmissionVersion = {
  /**
   * The id of the assignment this submissions is for
   *
   * Type: integer
   */
  assignment_id: number;
  /** The name of the assignment this submission is for */
  assignment_name: string;
  /** The body text of the submission */
  body: string;
  /** The most up to date grade for the current version of this submission */
  current_grade: string;
  /**
   * The latest time stamp for the grading of this submission
   *
   * Format: date-time
   */
  current_graded_at: string;
  /** The name of the most recent grader for this submission */
  current_grader: string;
  /**
   * Boolean indicating whether the grade is equal to the current submission
   * grade
   */
  grade_matches_current_submission: boolean;
  /**
   * Time stamp for the grading of this version of the submission
   *
   * Format: date-time
   */
  graded_at: string;
  /** The name of the user who graded this version of the submission */
  grader: string;
  /**
   * The user id of the user who graded this version of the submission
   *
   * Type: integer
   */
  grader_id: number;
  /**
   * The id of the submission of which this is a version
   *
   * Type: integer
   */
  id: number;
  /** The updated grade provided in this version of the submission */
  new_grade: string;
  /**
   * The timestamp for the grading of this version of the submission (alias for
   * graded_at)
   *
   * Format: date-time
   */
  new_graded_at: string;
  /** Alias for 'grader' */
  new_grader: string;
  /** The grade for the submission version immediately preceding this one */
  previous_grade: string;
  /**
   * The timestamp for the grading of the submission version immediately
   * preceding this one
   *
   * Format: date-time
   */
  previous_graded_at: string;
  /**
   * The name of the grader who graded the version of this submission
   * immediately preceding this one
   */
  previous_grader: string;
  /**
   * The score for this version of the submission
   *
   * Type: integer
   */
  score: number;
  /** The name of the student who created this submission */
  user_name: string;
  /** The type of submission */
  submission_type: string;
  /** The url of the submission, if there is one */
  url: string;
  /**
   * The user ID of the student who created this submission
   *
   * Type: integer
   */
  user_id: number;
  /** The state of the submission at this version */
  workflow_state: string;
};

export type SubmissionHistory = {
  /**
   * The id of the submission
   *
   * Type: integer
   */
  submission_id: number;
  /** An array of all the versions of this submission */
  versions: SubmissionVersion[];
};
