export type NewQuiz = {
  /** The ID of the quiz */
  id: string;
  /** The title of the quiz */
  title: string;
  /** The quiz's instructions */
  instructions: string;
  /** The ID of the quiz's assignment group */
  assignment_group_id: string;
  /**
   * The total point value given to the quiz
   *
   * Type: integer
   */
  points_possible: number;
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
  /** Whether the quiz has a published or unpublished draft state */
  published: boolean;
  /**
   * The type of grading the assignment receives ('pass_fail', 'percent',
   * 'letter_grade', 'gpa_scale', or 'points')
   */
  grading_type: string;
  /** Additional quiz settings (see QuizSettings) */
  quiz_settings: QuizSettings;
};

export type QuizSettings = {
  /**
   * Type of calculator the user will have access to during the quiz ('none',
   * basic' or 'scientific')
   */
  calculator_type: string;
  /**
   * Whether access to the quiz should be restricted to the IP address ranges
   * described in 'filters'
   */
  filter_ip_address: boolean;
  /**
   * IP address ranges from which users can take the quiz, if
   * 'filter_ip_address' is true
   */
  filters: unknown;
  /**
   * Whether questions should be shown all at once ('none') or one-at-a-time
   * ('question')
   */
  one_at_a_time_type: string;
  /**
   * Whether to allow user to return to previous questions when
   * 'one_at_a_time_type' is set to 'question'
   */
  allow_backtracking: boolean;
  /** Whether answers should be shuffled during quiz */
  shuffle_answers: boolean;
  /** Whether questions should be shuffled during quiz */
  shuffle_questions: boolean;
  /**
   * Whether to require an access code to take the quiz (set as
   * 'student_access_code')
   */
  require_student_access_code: boolean;
  /**
   * Access code that is required to take the quiz if
   * 'require_student_access_code' is true
   */
  student_access_code: string;
  /** Whether the quiz has a time limit (set as 'session_time_limit_in_seconds') */
  has_time_limit: boolean;
  /**
   * Time limit during the quiz (in seconds)
   *
   * Type: integer
   */
  session_time_limit_in_seconds: number;
  /** Settings to configure multiple quiz attempts (see MultipleAttemptsSettings) */
  multiple_attempts: MultipleAttemptsSettings;
  /** Settings to restrict student result view (see ResultViewSettings) */
  result_view_settings: ResultViewSettings;
};

export type MultipleAttemptsSettings = {
  /** Whether to allow multiple attempts */
  multiple_attempts_enabled: boolean;
  /**
   * Whether to limit the number of attempts if 'multiple_attempts_enabled' is
   * true. Unlimited attempts if false.
   */
  attempt_limit: boolean;
  /**
   * Number of attempts to allow if 'multiple_attempts_enabled' and
   * 'attempt_limit' are true
   *
   * Type: integer
   */
  max_attempts: number;
  /**
   * Specifies which score to keep after attempts ('average', 'first',
   * 'highest', or 'latest')
   */
  score_to_keep: string;
  /**
   * Whether to enforce a waiting period after an attempt (set as
   * 'cooling_period_seconds')
   */
  cooling_period: boolean;
  /**
   * Required waiting period (in seconds) between attempts. Enforced if
   * 'cooling_period' is true.
   *
   * Type: integer
   */
  cooling_period_seconds: number;
};

export type ResultViewSettings = {
  /** Whether to restrict the student result view */
  result_view_restricted: boolean;
  /**
   * Whether to show points awarded (overall and per question), if
   * 'result_view_restricted' is true
   */
  display_points_awarded: boolean;
  /**
   * Whether to show points possible (overall and per question), if
   * 'result_view_restricted' is true
   */
  display_points_possible: boolean;
  /**
   * Whether to show questions in the result view, if 'result_view_restricted'
   * is true
   */
  display_items: boolean;
  /**
   * Whether to show student's responses in the result view, if 'display_items'
   * is true
   */
  display_item_response: boolean;
  /**
   * Whether student responses should be shown for all attempts ('always'), only
   * once after each attempt ('once_per_attempt'), only after their last attempt
   * ('after_last_attempt'), or only once after their last attempt
   * ('once_after_last_attempt'). if 'display_item_response' is true
   */
  display_item_response_qualifier: string;
  /**
   * When student responses should be shown to them, if 'display_item_responses'
   * is true
   *
   * Format: 'date-time'
   */
  show_item_responses_at: string;
  /**
   * When student responses should be hidden from them, if
   * 'display_item_responses' is true. must be later than
   * 'show_item_responses_at'
   *
   * Format: 'date-time'
   */
  hide_item_responses_at: string;
  /**
   * Whether to indicate whether the student's response is correct/incorrect, if
   * 'display_item_response' is true
   */
  display_item_response_correctness: boolean;
  /**
   * Whether student response correctness should be shown for all attempts
   * ('always') or only after their last attempt ('after_last_attempt'), if
   * 'display_item_response_correctness' is true
   */
  display_item_response_correctness_qualifier: string;
  /**
   * When correctness of student responses should be shown to them, if
   * 'display_item_response_correctness' is true
   *
   * Format: 'date-time'
   */
  show_item_response_correctness_at: string;
  /**
   * When correctness of student responses should be hidden from them, if
   * 'display_item_response_correctness' is true. must be later than
   * 'show_item_response_correctness_at'
   *
   * Format: 'date-time'
   */
  hide_item_response_correctness_at: string;
  /**
   * Whether to show the correct answer for each question, if
   * 'display_item_response_correctness' is true
   */
  display_item_correct_answer: boolean;
  /** Whether to show feedback for each item, if 'display_items' is true */
  display_item_feedback: boolean;
};
