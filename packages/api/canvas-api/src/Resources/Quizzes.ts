import { JSONValue } from '@battis/typescript-tricks';
import { AssignmentDate, LockInfo } from './Assignments.js';

/**
 *
 */
export type Quiz = {
  /**
   * the ID of the quiz
   *
   * type: integer
   */
  id: number | string;
  /**
   * the title of the quiz
   *
   *
   */
  title: string;
  /**
   * the HTTP/HTTPS URL to the quiz
   *
   *
   */
  html_url: string;
  /**
   * a url suitable for loading the quiz in a mobile webview.  it will persiste the headless session and, for quizzes in public courses, will force the user to login
   *
   *
   */
  mobile_url: string;
  /**
   * A url that can be visited in the browser with a POST request to preview a quiz as the teacher. Only present when the user may grade
   *
   *
   */
  preview_url: string;
  /**
   * the description of the quiz
   *
   *
   */
  description: string;
  /**
   * type of quiz possible values: 'practice_quiz', 'assignment', 'graded_survey', 'survey'
   *
   *
   */
  quiz_type: string;
  /**
   * the ID of the quiz's assignment group:
   *
   * type: integer
   */
  assignment_group_id: number | string;
  /**
   * quiz time limit in minutes
   *
   * type: integer
   */
  time_limit: number | string;
  /**
   * shuffle answers for students?
   *
   * type: boolean
   */
  shuffle_answers: boolean | string;
  /**
   * let students see their quiz responses? possible values: null, 'always', 'until_after_last_attempt'
   *
   *
   */
  hide_results: string;
  /**
   * show which answers were correct when results are shown? only valid if hide_results=null
   *
   * type: boolean
   */
  show_correct_answers: boolean | string;
  /**
   * restrict the show_correct_answers option above to apply only to the last submitted attempt of a quiz that allows multiple attempts. only valid if show_correct_answers=true and allowed_attempts > 1
   *
   * type: boolean
   */
  show_correct_answers_last_attempt: boolean | string;
  /**
   * when should the correct answers be visible by students? only valid if show_correct_answers=true
   *
   * format: date-time
   */
  show_correct_answers_at: string;
  /**
   * prevent the students from seeing correct answers after the specified date has passed. only valid if show_correct_answers=true
   *
   * format: date-time
   */
  hide_correct_answers_at: string;
  /**
   * prevent the students from seeing their results more than once (right after they submit the quiz)
   *
   * type: boolean
   */
  one_time_results: boolean | string;
  /**
   * which quiz score to keep (only if allowed_attempts != 1) possible values: 'keep_highest', 'keep_latest'
   *
   *
   */
  scoring_policy: string;
  /**
   * how many times a student can take the quiz -1 = unlimited attempts
   *
   * type: integer
   */
  allowed_attempts: number | string;
  /**
   * show one question at a time?
   *
   * type: boolean
   */
  one_question_at_a_time: boolean | string;
  /**
   * the number of questions in the quiz
   *
   * type: integer
   */
  question_count: number | string;
  /**
   * The total point value given to the quiz
   *
   * type: integer
   */
  points_possible: number | string;
  /**
   * lock questions after answering? only valid if one_question_at_a_time=true
   *
   * type: boolean
   */
  cant_go_back: boolean | string;
  /**
   * access code to restrict quiz access
   *
   *
   */
  access_code: string;
  /**
   * IP address or range that quiz access is limited to
   *
   *
   */
  ip_filter: string;
  /**
   * when the quiz is due
   *
   * format: date-time
   */
  due_at: string;
  /**
   * when to lock the quiz
   *
   * format: date-time
   */
  lock_at: string;
  /**
   * when to unlock the quiz
   *
   * format: date-time
   */
  unlock_at: string;
  /**
   * whether the quiz has a published or unpublished draft state.
   *
   * type: boolean
   */
  published: boolean | string;
  /**
   * Whether the assignment's 'published' state can be changed to false. Will be false if there are student submissions for the quiz.
   *
   * type: boolean
   */
  unpublishable: boolean | string;
  /**
   * Whether or not this is locked for the user.
   *
   * type: boolean
   */
  locked_for_user: boolean | string;
  /**
   * (Optional) Information for the user about the lock. Present when locked_for_user is true.
   *
   *
   */
  lock_info: LockInfo;
  /**
   * (Optional) An explanation of why this is locked for the user. Present when locked_for_user is true.
   *
   *
   */
  lock_explanation: string;
  /**
   * Link to SpeedGrader for this quiz. Will not be present if quiz is unpublished
   *
   *
   */
  speedgrader_url: string;
  /**
   * Link to endpoint to send extensions for this quiz.
   *
   *
   */
  quiz_extensions_url: string;
  /**
   * Permissions the user has for the quiz
   *
   *
   */
  permissions: QuizPermissions;
  /**
   * list of due dates for the quiz
   *
   *
   */
  all_dates: AssignmentDate[];
  /**
   * Current version number of the quiz
   *
   * type: integer
   */
  version_number: number | string;
  /**
   * List of question types in the quiz
   *
   *
   */
  question_types: string[];
  /**
   * Whether survey submissions will be kept anonymous (only applicable to 'graded_survey', 'survey' quiz types)
   *
   * type: boolean
   */
  anonymous_submissions: boolean | string;
};

/**
 * Permissions the user has for the quiz
 */
export type QuizPermissions = {
  /**
   * whether the user can view the quiz
   *
   * type: boolean
   */
  read: boolean | string;
  /**
   * whether the user may submit a submission for the quiz
   *
   * type: boolean
   */
  submit: boolean | string;
  /**
   * whether the user may create a new quiz
   *
   * type: boolean
   */
  create: boolean | string;
  /**
   * whether the user may edit, update, or delete the quiz
   *
   * type: boolean
   */
  manage: boolean | string;
  /**
   * whether the user may view quiz statistics for this quiz
   *
   * type: boolean
   */
  read_statistics: boolean | string;
  /**
   * whether the user may review grades for all quiz submissions for this quiz
   *
   * type: boolean
   */
  review_grades: boolean | string;
  /**
   * whether the user may update the quiz
   *
   * type: boolean
   */
  update: boolean | string;
};
