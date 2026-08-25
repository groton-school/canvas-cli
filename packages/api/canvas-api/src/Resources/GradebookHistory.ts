import { JSONValue } from '@battis/typescript-tricks';

/**
 *
 */
export type Grader = {
  /**
   * the user_id of the user who graded the contained submissions
   *
   * type: integer
   */
  id: number | string;
  /**
   * the name of the user who graded the contained submissions
   *
   *
   */
  name: string;
  /**
   * the assignment groups for all submissions in this response that were graded by this user.  The details are not nested inside here, but the fact that an assignment is present here means that the grader did grade submissions for this assignment on the contextual date. You can use the id of a grader and of an assignment to make another API call to find all submissions for a grader/assignment combination on a given date.
   *
   *
   */
  assignments: number | string[];
};

/**
 *
 */
export type Day = {
  /**
   * the date represented by this entry
   *
   * format: date-time
   */
  date: string;
  /**
   * an array of the graders who were responsible for the submissions in this response. the submissions are grouped according to the person who graded them and the assignment they were submitted for.
   *
   * type: integer
   */
  graders: number | string;
};

/**
 * A SubmissionVersion object contains all the fields that a Submission object does, plus additional fields prefixed with current_* new_* and previous_* described below.
 */
export type SubmissionVersion = {
  /**
   * the id of the assignment this submissions is for
   *
   * type: integer
   */
  assignment_id: number | string;
  /**
   * the name of the assignment this submission is for
   *
   *
   */
  assignment_name: string;
  /**
   * the body text of the submission
   *
   *
   */
  body: string;
  /**
   * the most up to date grade for the current version of this submission
   *
   *
   */
  current_grade: string;
  /**
   * the latest time stamp for the grading of this submission
   *
   * format: date-time
   */
  current_graded_at: string;
  /**
   * the name of the most recent grader for this submission
   *
   *
   */
  current_grader: string;
  /**
   * boolean indicating whether the grade is equal to the current submission grade
   *
   * type: boolean
   */
  grade_matches_current_submission: boolean | string;
  /**
   * time stamp for the grading of this version of the submission
   *
   * format: date-time
   */
  graded_at: string;
  /**
   * the name of the user who graded this version of the submission
   *
   *
   */
  grader: string;
  /**
   * the user id of the user who graded this version of the submission
   *
   * type: integer
   */
  grader_id: number | string;
  /**
   * the id of the submission of which this is a version
   *
   * type: integer
   */
  id: number | string;
  /**
   * the updated grade provided in this version of the submission
   *
   *
   */
  new_grade: string;
  /**
   * the timestamp for the grading of this version of the submission (alias for graded_at)
   *
   * format: date-time
   */
  new_graded_at: string;
  /**
   * alias for 'grader'
   *
   *
   */
  new_grader: string;
  /**
   * the grade for the submission version immediately preceding this one
   *
   *
   */
  previous_grade: string;
  /**
   * the timestamp for the grading of the submission version immediately preceding this one
   *
   * format: date-time
   */
  previous_graded_at: string;
  /**
   * the name of the grader who graded the version of this submission immediately preceding this one
   *
   *
   */
  previous_grader: string;
  /**
   * the score for this version of the submission
   *
   * type: integer
   */
  score: number | string;
  /**
   * the name of the student who created this submission
   *
   *
   */
  user_name: string;
  /**
   * the type of submission
   *
   *
   */
  submission_type: string;
  /**
   * the url of the submission, if there is one
   *
   *
   */
  url: string;
  /**
   * the user ID of the student who created this submission
   *
   * type: integer
   */
  user_id: number | string;
  /**
   * the state of the submission at this version
   *
   *
   */
  workflow_state: string;
};

/**
 *
 */
export type SubmissionHistory = {
  /**
   * the id of the submission
   *
   * type: integer
   */
  submission_id: number | string;
  /**
   * an array of all the versions of this submission
   *
   *
   */
  versions: SubmissionVersion[];
};
