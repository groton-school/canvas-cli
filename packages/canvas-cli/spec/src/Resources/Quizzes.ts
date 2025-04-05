import { AssignmentDate, LockInfo } from './Assignments.js';

export type Quiz = {
  /**
   * The ID of the quiz
   *
   * Type: integer
   */
  id: number;
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
  assignment_group_id: number;
  /**
   * Quiz time limit in minutes
   *
   * Type: integer
   */
  time_limit: number;
  /** Shuffle answers for students? */
  shuffle_answers: boolean;
  /**
   * Let students see their quiz responses? possible values: null, 'always',
   * 'until_after_last_attempt'
   */
  hide_results: string;
  /**
   * Show which answers were correct when results are shown? only valid if
   * hide_results=null
   */
  show_correct_answers: boolean;
  /**
   * Restrict the show_correct_answers option above to apply only to the last
   * submitted attempt of a quiz that allows multiple attempts. only valid if
   * show_correct_answers=true and allowed_attempts > 1
   */
  show_correct_answers_last_attempt: boolean;
  /**
   * When should the correct answers be visible by students? only valid if
   * show_correct_answers=true
   *
   * Format: 'date-time'
   */
  show_correct_answers_at: string;
  /**
   * Prevent the students from seeing correct answers after the specified date
   * has passed. only valid if show_correct_answers=true
   *
   * Format: 'date-time'
   */
  hide_correct_answers_at: string;
  /**
   * Prevent the students from seeing their results more than once (right after
   * they submit the quiz)
   */
  one_time_results: boolean;
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
  allowed_attempts: number;
  /** Show one question at a time? */
  one_question_at_a_time: boolean;
  /**
   * The number of questions in the quiz
   *
   * Type: integer
   */
  question_count: number;
  /**
   * The total point value given to the quiz
   *
   * Type: integer
   */
  points_possible: number;
  /** Lock questions after answering? only valid if one_question_at_a_time=true */
  cant_go_back: boolean;
  /** Access code to restrict quiz access */
  access_code: string;
  /** IP address or range that quiz access is limited to */
  ip_filter: string;
  /**
   * When the quiz is due
   *
   * Format: 'date-time'
   */
  due_at: string;
  /**
   * When to lock the quiz
   *
   * Format: 'date-time'
   */
  lock_at: string;
  /**
   * When to unlock the quiz
   *
   * Format: 'date-time'
   */
  unlock_at: string;
  /** Whether the quiz has a published or unpublished draft state. */
  published: boolean;
  /**
   * Whether the assignment's 'published' state can be changed to false. Will be
   * false if there are student submissions for the quiz.
   */
  unpublishable: boolean;
  /** Whether or not this is locked for the user. */
  locked_for_user: boolean;
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
  version_number: number;
  /** List of question types in the quiz */
  question_types: string[];
  /**
   * Whether survey submissions will be kept anonymous (only applicable to
   * 'graded_survey', 'survey' quiz types)
   */
  anonymous_submissions: boolean;
};

/** Permissions the user has for the quiz */
export type QuizPermissions = {
  /** Whether the user can view the quiz */
  read: boolean;
  /** Whether the user may submit a submission for the quiz */
  submit: boolean;
  /** Whether the user may create a new quiz */
  create: boolean;
  /** Whether the user may edit, update, or delete the quiz */
  manage: boolean;
  /** Whether the user may view quiz statistics for this quiz */
  read_statistics: boolean;
  /** Whether the user may review grades for all quiz submissions for this quiz */
  review_grades: boolean;
  /** Whether the user may update the quiz */
  update: boolean;
};
