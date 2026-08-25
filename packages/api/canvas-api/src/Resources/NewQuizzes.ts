import { JSONObject, JSONValue } from '@battis/typescript-tricks';

/**
 *
 */
export type NewQuiz = {
  /**
   * the ID of the quiz
   *
   *
   */
  id: string;
  /**
   * the title of the quiz
   *
   *
   */
  title: string;
  /**
   * the quiz's instructions
   *
   *
   */
  instructions: string;
  /**
   * the ID of the quiz's assignment group
   *
   *
   */
  assignment_group_id: string;
  /**
   * The total point value given to the quiz
   *
   * type: integer
   */
  points_possible: number | string;
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
   * whether the quiz has a published or unpublished draft state
   *
   * type: boolean
   */
  published: boolean | string;
  /**
   * the type of grading the assignment receives ('pass_fail', 'percent', 'letter_grade', 'gpa_scale', or 'points')
   *
   *
   */
  grading_type: string;
  /**
   * additional quiz settings (see QuizSettings)
   *
   *
   */
  quiz_settings: QuizSettings;
};

/**
 *
 */
export type QuizSettings = {
  /**
   * type of calculator the user will have access to during the quiz ('none', basic' or 'scientific')
   *
   *
   */
  calculator_type: string;
  /**
   * whether access to the quiz should be restricted to the IP address ranges described in 'filters'
   *
   * type: boolean
   */
  filter_ip_address: boolean | string;
  /**
   * IP address ranges from which users can take the quiz, if 'filter_ip_address' is true
   *
   * object
   */
  filters: JSONObject;
  /**
   * whether questions should be shown all at once ('none') or one-at-a-time ('question')
   *
   *
   */
  one_at_a_time_type: string;
  /**
   * whether to allow user to return to previous questions when 'one_at_a_time_type' is set to 'question'
   *
   * type: boolean
   */
  allow_backtracking: boolean | string;
  /**
   * whether answers should be shuffled during quiz
   *
   * type: boolean
   */
  shuffle_answers: boolean | string;
  /**
   * whether questions should be shuffled during quiz
   *
   * type: boolean
   */
  shuffle_questions: boolean | string;
  /**
   * whether to require an access code to take the quiz (set as 'student_access_code')
   *
   * type: boolean
   */
  require_student_access_code: boolean | string;
  /**
   * access code that is required to take the quiz if 'require_student_access_code' is true
   *
   *
   */
  student_access_code: string;
  /**
   * whether the quiz has a time limit (set as 'session_time_limit_in_seconds')
   *
   * type: boolean
   */
  has_time_limit: boolean | string;
  /**
   * time limit during the quiz (in seconds)
   *
   * type: integer
   */
  session_time_limit_in_seconds: number | string;
  /**
   * settings to configure multiple quiz attempts (see MultipleAttemptsSettings)
   *
   *
   */
  multiple_attempts: MultipleAttemptsSettings;
  /**
   * settings to restrict student result view (see ResultViewSettings)
   *
   *
   */
  result_view_settings: ResultViewSettings;
};

/**
 *
 */
export type MultipleAttemptsSettings = {
  /**
   * whether to allow multiple attempts
   *
   * type: boolean
   */
  multiple_attempts_enabled: boolean | string;
  /**
   * whether to limit the number of attempts if 'multiple_attempts_enabled' is true. Unlimited attempts if false.
   *
   * type: boolean
   */
  attempt_limit: boolean | string;
  /**
   * number of attempts to allow if 'multiple_attempts_enabled' and 'attempt_limit' are true
   *
   * type: integer
   */
  max_attempts: number | string;
  /**
   * specifies which score to keep after attempts ('average', 'first', 'highest', or 'latest')
   *
   *
   */
  score_to_keep: string;
  /**
   * whether to enforce a waiting period after an attempt (set as 'cooling_period_seconds')
   *
   * type: boolean
   */
  cooling_period: boolean | string;
  /**
   * required waiting period (in seconds) between attempts. Enforced if 'cooling_period' is true.
   *
   * type: integer
   */
  cooling_period_seconds: number | string;
};

/**
 *
 */
export type ResultViewSettings = {
  /**
   * whether to restrict the student result view
   *
   * type: boolean
   */
  result_view_restricted: boolean | string;
  /**
   * whether to show points awarded (overall and per question), if 'result_view_restricted' is true
   *
   * type: boolean
   */
  display_points_awarded: boolean | string;
  /**
   * whether to show points possible (overall and per question), if 'result_view_restricted' is true
   *
   * type: boolean
   */
  display_points_possible: boolean | string;
  /**
   * whether to show questions in the result view, if 'result_view_restricted' is true
   *
   * type: boolean
   */
  display_items: boolean | string;
  /**
   * whether to show student's responses in the result view, if 'display_items' is true
   *
   * type: boolean
   */
  display_item_response: boolean | string;
  /**
   * whether student responses should be shown for all attempts ('always'), only once after each attempt ('once_per_attempt'), only after their last attempt ('after_last_attempt'), or only once after their last attempt ('once_after_last_attempt'). if 'display_item_response' is true
   *
   *
   */
  display_item_response_qualifier: string;
  /**
   * when student responses should be shown to them, if 'display_item_responses' is true
   *
   * format: date-time
   */
  show_item_responses_at: string;
  /**
   * when student responses should be hidden from them, if 'display_item_responses' is true. must be later than 'show_item_responses_at'
   *
   * format: date-time
   */
  hide_item_responses_at: string;
  /**
   * whether to indicate whether the student's response is correct/incorrect, if 'display_item_response' is true
   *
   * type: boolean
   */
  display_item_response_correctness: boolean | string;
  /**
   * whether student response correctness should be shown for all attempts ('always') or only after their last attempt ('after_last_attempt'), if 'display_item_response_correctness' is true
   *
   *
   */
  display_item_response_correctness_qualifier: string;
  /**
   * when correctness of student responses should be shown to them, if 'display_item_response_correctness' is true
   *
   * format: date-time
   */
  show_item_response_correctness_at: string;
  /**
   * when correctness of student responses should be hidden from them, if 'display_item_response_correctness' is true. must be later than 'show_item_response_correctness_at'
   *
   * format: date-time
   */
  hide_item_response_correctness_at: string;
  /**
   * whether to show the correct answer for each question, if 'display_item_response_correctness' is true
   *
   * type: boolean
   */
  display_item_correct_answer: boolean | string;
  /**
   * whether to show feedback for each item, if 'display_items' is true
   *
   * type: boolean
   */
  display_item_feedback: boolean | string;
};
