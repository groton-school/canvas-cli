import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { NewQuiz } from '../../../../../Resources/NewQuizzes.js';

export type createPathParameters = {
  /**
   * No description
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  course_id: number | string;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /** The title of the quiz. */
  'quiz[title]': string;
  /**
   * The ID of the quiz's assignment group.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  'quiz[assignment_group_id]': number | string;
  /**
   * The total point value given to the quiz. Must be positive.
   *
   * Type: number
   *
   * Format: 'float'
   */
  'quiz[points_possible]': number | string;
  /**
   * When the quiz is due.
   *
   * Format: date-time
   */
  'quiz[due_at]': string;
  /**
   * When to lock the quiz.
   *
   * Format: date-time
   */
  'quiz[lock_at]': string;
  /**
   * When to unlock the quiz.
   *
   * Format: date-time
   */
  'quiz[unlock_at]': string;
  /** The type of grading the assignment receives. */
  'quiz[grading_type]': string;
  /** Instructions for the quiz. */
  'quiz[instructions]': string;
  /**
   * Specifies which type of Calculator a student can use during Quiz taking.
   * Should be null if no calculator is allowed.
   */
  'quiz[quiz_settings][calculator_type]': string;
  /**
   * Whether IP filtering is needed. Must be true for filters to take effect.
   *
   * Type: boolean
   */
  'quiz[quiz_settings][filter_ip_address]': boolean | string;
  /**
   * Specifies ranges of IP addresses where the quiz can be taken from. Each
   * range is an array like [start address, end address], or null if there's
   * no restriction.
   */
  'quiz[quiz_settings][filters][ips]': string[];
  /**
   * Whether multiple attempts for this quiz is true.
   *
   * Type: boolean
   */
  'quiz[quiz_settings][multiple_attempts][multiple_attempts_enabled]':
    | boolean
    | string;
  /**
   * Whether there is an attempt limit. Only set if multiple_attempts_enabled
   * is true.
   *
   * Type: boolean
   */
  'quiz[quiz_settings][multiple_attempts][attempt_limit]': boolean | string;
  /**
   * The allowed attempts a student can take. If null, the allowed attempts
   * are unlimited. Only used if attempt_limit is true.
   *
   * Positive Integer
   */
  'quiz[quiz_settings][multiple_attempts][max_attempts]': number;
  /**
   * Whichever score to keep for the attempts. Only used if
   * multiple_attempts_enabled is true.
   */
  'quiz[quiz_settings][multiple_attempts][score_to_keep]': string;
  /**
   * Whether there is a cooling (waiting) period. Only used if
   * multiple_attempts_enabled is true.
   *
   * Type: boolean
   */
  'quiz[quiz_settings][multiple_attempts][cooling_period]': boolean | string;
  /**
   * Required waiting period in seconds between attempts. If null, there is no
   * required time. Only used if cooling_period is true
   *
   * Positive Integer
   */
  'quiz[quiz_settings][multiple_attempts][cooling_period_seconds]': number;
  /** Specifies the settings for questions to display when quiz taking. */
  'quiz[quiz_settings][one_at_a_time_type]': string;
  /**
   * Whether to allow user to return to previous questions when
   * 'one_at_a_time_type' is set to 'question'.
   *
   * Type: boolean
   */
  'quiz[quiz_settings][allow_backtracking]': boolean | string;
  /**
   * Whether the results view is restricted for students. Must be true for any
   * student restrictions to be set.
   *
   * Type: boolean
   */
  'quiz[quiz_settings][result_view_settings][result_view_restricted]':
    | boolean
    | string;
  /**
   * Whether points are shown. Must set result_view_restricted to true to use
   * this parameter.
   *
   * Type: boolean
   */
  'quiz[quiz_settings][result_view_settings][display_points_awarded]':
    | boolean
    | string;
  /**
   * Whether points possible is shown. Must set result_view_restricted to true
   * to use this parameter.
   *
   * Type: boolean
   */
  'quiz[quiz_settings][result_view_settings][display_points_possible]':
    | boolean
    | string;
  /**
   * Whether to show items in the results view. Must be true for any items
   * restrictions to be set.
   *
   * Type: boolean
   */
  'quiz[quiz_settings][result_view_settings][display_items]': boolean | string;
  /**
   * Whether item response is shown. Only set if display_items is true. Must
   * be true for display_item_response_qualifier, show_item_responses_at,
   * hide_item_responses_at, and display_item_response_correctness to be set.
   *
   * Type: boolean
   */
  'quiz[quiz_settings][result_view_settings][display_item_response]':
    | boolean
    | string;
  /**
   * Specifies after which attempts student responses should be shown to them.
   * Only used if display_item_response is true.
   */
  'quiz[quiz_settings][result_view_settings][display_item_response_qualifier]': string;
  /**
   * When student responses should be shown to them. Only used if
   * display_item_response is true.
   *
   * Format: date-time
   */
  'quiz[quiz_settings][result_view_settings][show_item_responses_at]': string;
  /**
   * When student responses should be hidden from them. Only used if
   * display_item_response is true.
   *
   * Format: date-time
   */
  'quiz[quiz_settings][result_view_settings][hide_item_responses_at]': string;
  /**
   * Whether item correctness is shown. Only set if display_item_response is
   * true. Must be true for display_item_response_correctness_qualifier,
   * show_item_response_correctness_at, hide_item_response_correctness_at and
   * display_item_correct_answer to be set.
   *
   * Type: boolean
   */
  'quiz[quiz_settings][result_view_settings][display_item_response_correctness]':
    | boolean
    | string;
  /**
   * Specifies after which attempts student response correctness should be
   * shown to them. Only used if display_item_response_correctness is true.
   */
  'quiz[quiz_settings][result_view_settings][display_item_response_correctness_qualifier]': string;
  /**
   * When student response correctness should be shown to them. Only used if
   * display_item_response_correctness is true.
   *
   * Format: date-time
   */
  'quiz[quiz_settings][result_view_settings][show_item_response_correctness_at]': string;
  /**
   * When student response correctness should be hidden from them. Only used
   * if display_item_response_correctness is true.
   *
   * Format: date-time
   */
  'quiz[quiz_settings][result_view_settings][hide_item_response_correctness_at]': string;
  /**
   * Whether correct answer is shown. Only set if
   * display_item_response_correctness is true.
   *
   * Type: boolean
   */
  'quiz[quiz_settings][result_view_settings][display_item_correct_answer]':
    | boolean
    | string;
  /**
   * Whether Item feedback is shown. Only set if display_items is true.
   *
   * Type: boolean
   */
  'quiz[quiz_settings][result_view_settings][display_item_feedback]':
    | boolean
    | string;
  /**
   * Whether answers should be shuffled for students.
   *
   * Type: boolean
   */
  'quiz[quiz_settings][shuffle_answers]': boolean | string;
  /**
   * Whether questions should be shuffled for students.
   *
   * Type: boolean
   */
  'quiz[quiz_settings][shuffle_questions]': boolean | string;
  /**
   * Whether an access code is needed to take the quiz.
   *
   * Type: boolean
   */
  'quiz[quiz_settings][require_student_access_code]': boolean | string;
  /** Access code to restrict quiz access. Should be null if no restriction. */
  'quiz[quiz_settings][student_access_code]': string;
  /**
   * Whether there is a time limit for the quiz.
   *
   * Type: boolean
   */
  'quiz[quiz_settings][has_time_limit]': boolean | string;
  /**
   * Limit the time a student can work on the quiz. Should be null if no
   * restriction.
   *
   * Positive Integer
   */
  'quiz[quiz_settings][session_time_limit_in_seconds]': number;
};

type Options = {
  pathParams: createPathParameters;
} & (
  | {
      searchParams?: Partial<createSearchParameters>;
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      searchParams: createSearchParameters;
      params: createFormParameters;
      strict: true;
    }
);

/**
 * Create a new quiz
 *
 * Create a new quiz for the course.
 *
 * Nickname: create_new_quiz
 */
export async function create(options: Options) {
  const response = await client().fetchAs<NewQuiz>(
    `/api/quiz/v1/courses/{course_id}/quizzes`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
