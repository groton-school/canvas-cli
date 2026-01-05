import { JSONValue } from '@battis/typescript-tricks';
import { Assignment } from './Assignments.js';
import { Course } from './Courses.js';
import { User } from './Users.js';

export type MediaComment = {
  'content-type': string;
  display_name: string;
  media_id: string;
  media_type: string;
  url: string;
};

export type SubmissionComment = {
  /** Type: integer */
  id: number | string;
  /** Type: integer */
  author_id: number | string;
  author_name: string;
  /** Abbreviated user object UserDisplay (see users API). */
  author: string;
  comment: string;
  /** Format: date-time */
  created_at: string;
  /** Format: date-time */
  edited_at: string;
  media_comment: MediaComment;
};

export type Submission = {
  /**
   * The submission's assignment id
   *
   * Type: integer
   */
  assignment_id: number | string;
  /** The submission's assignment (see the assignments API) (optional) */
  assignment: Assignment;
  /** The submission's course (see the course API) (optional) */
  course: Course;
  /**
   * This is the submission attempt number.
   *
   * Type: integer
   */
  attempt: number | string;
  /**
   * The content of the submission, if it was submitted directly in a text
   * field.
   */
  body: string;
  /**
   * The grade for the submission, translated into the assignment grading scheme
   * (so a letter grade, for example).
   */
  grade: string;
  /**
   * A boolean flag which is false if the student has re-submitted since the
   * submission was last graded.
   *
   * Type: boolean
   */
  grade_matches_current_submission: boolean | string;
  /** URL to the submission. This will require the user to log in. */
  html_url: string;
  /** URL to the submission preview. This will require the user to log in. */
  preview_url: string;
  /**
   * The raw score
   *
   * Type: number
   */
  score: number | string;
  /** Associated comments for a submission (optional) */
  submission_comments: SubmissionComment[];
  /**
   * The types of submission ex:
   * ('online_text_entry'|'online_url'|'online_upload'|'online_quiz'|'media_recording'|'student_annotation')
   */
  submission_type: string;
  /**
   * The timestamp when the assignment was submitted
   *
   * Format: date-time
   */
  submitted_at: string;
  /** The URL of the submission (for 'online_url' submissions). */
  url: string;
  /**
   * The id of the user who created the submission
   *
   * Type: integer
   */
  user_id: number | string;
  /**
   * The id of the user who graded the submission. This will be null for
   * submissions that haven't been graded yet. It will be a positive number if a
   * real user has graded the submission and a negative number if the submission
   * was graded by a process (e.g. Quiz autograder and autograding LTI tools).
   * Specifically autograded quizzes set grader_id to the negative of the quiz
   * id. Submissions autograded by LTI tools set grader_id to the negative of
   * the tool id.
   *
   * Type: integer
   */
  grader_id: number | string;
  /** Format: date-time */
  graded_at: string;
  /** The submissions user (see user API) (optional) */
  user: User;
  /**
   * Whether the submission was made after the applicable due date
   *
   * Type: boolean
   */
  late: boolean | string;
  /**
   * Whether the assignment is visible to the user who submitted the assignment.
   * Submissions where `assignment_visible` is false no longer count towards the
   * student's grade and the assignment can no longer be accessed by the
   * student. `assignment_visible` becomes false for submissions that do not
   * have a grade and whose assignment is no longer assigned to the student's
   * section.
   *
   * Type: boolean
   */
  assignment_visible: boolean | string;
  /**
   * Whether the assignment is excused. Excused assignments have no impact on a
   * user's grade.
   *
   * Type: boolean
   */
  excused: boolean | string;
  /**
   * Whether the assignment is missing.
   *
   * Type: boolean
   */
  missing: boolean | string;
  /**
   * The status of the submission in relation to the late policy. Can be late,
   * missing, extended, none, or null.
   */
  late_policy_status: string;
  /**
   * The amount of points automatically deducted from the score by the
   * missing/late policy for a late or missing assignment.
   *
   * Type: number
   */
  points_deducted: number | string;
  /**
   * The amount of time, in seconds, that an submission is late by.
   *
   * Type: number
   */
  seconds_late: number | string;
  /** The current state of the submission */
  workflow_state: string;
  /**
   * Extra submission attempts allowed for the given user and assignment.
   *
   * Type: number
   */
  extra_attempts: number | string;
  /**
   * A unique short ID identifying this submission without reference to the
   * owning user. Only included if the caller has administrator access for the
   * current account.
   */
  anonymous_id: string;
  /**
   * The date this submission was posted to the student, or nil if it has not
   * been posted.
   *
   * Format: date-time
   */
  posted_at: string;
  /**
   * The read status of this submission for the given user (optional). Including
   * read_status will mark submission(s) as read.
   */
  read_status: string;
  /**
   * This indicates whether the submission has been reassigned by the
   * instructor.
   *
   * Type: boolean
   */
  redo_request: boolean | string;
};
