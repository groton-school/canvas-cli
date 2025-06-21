import { AssignmentDate, LockInfo } from './Assignments.js';

export type Quiz = {
  /**
   * The ID of the quiz
   *
   * Type: integer
   */
  id: number | string;
  /** The title of the quiz */
  title: string;
  /** The HTTP/HTTPS URL to the quiz */
  html_url: string;
  /**
   * A url suitable for loading the quiz in a mobile webview. it will persiste
   * the headless session and, for quizzes in public courses, will force the
   * user to login
   */
  mobile_url: string;
  /**
   * A url that can be visited in the browser with a POST request to preview a
   * quiz as the teacher. Only present when the user may grade
   */
  preview_url: string;
  /** The description of the quiz */
  description: string;
  /**
   * Type of quiz possible values: 'practice_quiz', 'assignment',
   * 'graded_survey', 'survey'
   */
  quiz_type: string;
  /**
   * The ID of the quiz's assignment group:
   *
   * Type: integer
   */
  assignment_group_id: number | string;
  /**
   * Quiz time limit in minutes
   *
   * Type: integer
   */
  time_limit: number | string;
  /**
   * Shuffle answers for students?
   *
   * Type: boolean
   */
  shuffle_answers: boolean | string;
  /**
   * Let students see their quiz responses? possible values: null, 'always',
   * 'until_after_last_attempt'
   */
  hide_results: string;
  /**
   * Show which answers were correct when results are shown? only valid if
   * hide_results=null
   *
   * Type: boolean
   */
  show_correct_answers: boolean | string;
  /**
   * Restrict the show_correct_answers option above to apply only to the last
   * submitted attempt of a quiz that allows multiple attempts. only valid if
   * show_correct_answers=true and allowed_attempts > 1
   *
   * Type: boolean
   */
  show_correct_answers_last_attempt: boolean | string;
  /**
   * When should the correct answers be visible by students? only valid if
   * show_correct_answers=true
   *
   * Format: date-time
   */
  show_correct_answers_at: string;
  /**
   * Prevent the students from seeing correct answers after the specified date
   * has passed. only valid if show_correct_answers=true
   *
   * Format: date-time
   */
  hide_correct_answers_at: string;
  /**
   * Prevent the students from seeing their results more than once (right after
   * they submit the quiz)
   *
   * Type: boolean
   */
  one_time_results: boolean | string;
  /**
   * Which quiz score to keep (only if allowed_attempts != 1) possible values:
   * 'keep_highest', 'keep_latest'
   */
  scoring_policy: string;
  /**
   * How many times a student can take the quiz -1 = unlimited attempts
   *
   * Type: integer
   */
  allowed_attempts: number | string;
  /**
   * Show one question at a time?
   *
   * Type: boolean
   */
  one_question_at_a_time: boolean | string;
  /**
   * The number of questions in the quiz
   *
   * Type: integer
   */
  question_count: number | string;
  /**
   * The total point value given to the quiz
   *
   * Type: integer
   */
  points_possible: number | string;
  /**
   * Lock questions after answering? only valid if one_question_at_a_time=true
   *
   * Type: boolean
   */
  cant_go_back: boolean | string;
  /** Access code to restrict quiz access */
  access_code: string;
  /** IP address or range that quiz access is limited to */
  ip_filter: string;
  /**
   * When the quiz is due
   *
   * Format: date-time
   */
  due_at: string;
  /**
   * When to lock the quiz
   *
   * Format: date-time
   */
  lock_at: string;
  /**
   * When to unlock the quiz
   *
   * Format: date-time
   */
  unlock_at: string;
  /**
   * Whether the quiz has a published or unpublished draft state.
   *
   * Type: boolean
   */
  published: boolean | string;
  /**
   * Whether the assignment's 'published' state can be changed to false. Will be
   * false if there are student submissions for the quiz.
   *
   * Type: boolean
   */
  unpublishable: boolean | string;
  /**
   * Whether or not this is locked for the user.
   *
   * Type: boolean
   */
  locked_for_user: boolean | string;
  /**
   * (Optional) Information for the user about the lock. Present when
   * locked_for_user is true.
   */
  lock_info: LockInfo;
  /**
   * (Optional) An explanation of why this is locked for the user. Present when
   * locked_for_user is true.
   */
  lock_explanation: string;
  /**
   * Link to SpeedGrader for this quiz. Will not be present if quiz is
   * unpublished
   */
  speedgrader_url: string;
  /** Link to endpoint to send extensions for this quiz. */
  quiz_extensions_url: string;
  /** Permissions the user has for the quiz */
  permissions: QuizPermissions;
  /** List of due dates for the quiz */
  all_dates: AssignmentDate[];
  /**
   * Current version number of the quiz
   *
   * Type: integer
   */
  version_number: number | string;
  /** List of question types in the quiz */
  question_types: string[];
  /**
   * Whether survey submissions will be kept anonymous (only applicable to
   * 'graded_survey', 'survey' quiz types)
   *
   * Type: boolean
   */
  anonymous_submissions: boolean | string;
};

/** Permissions the user has for the quiz */
export type QuizPermissions = {
  /**
   * Whether the user can view the quiz
   *
   * Type: boolean
   */
  read: boolean | string;
  /**
   * Whether the user may submit a submission for the quiz
   *
   * Type: boolean
   */
  submit: boolean | string;
  /**
   * Whether the user may create a new quiz
   *
   * Type: boolean
   */
  create: boolean | string;
  /**
   * Whether the user may edit, update, or delete the quiz
   *
   * Type: boolean
   */
  manage: boolean | string;
  /**
   * Whether the user may view quiz statistics for this quiz
   *
   * Type: boolean
   */
  read_statistics: boolean | string;
  /**
   * Whether the user may review grades for all quiz submissions for this quiz
   *
   * Type: boolean
   */
  review_grades: boolean | string;
  /**
   * Whether the user may update the quiz
   *
   * Type: boolean
   */
  update: boolean | string;
};
