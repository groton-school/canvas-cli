import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { Quiz } from '../../../../Resources/Quizzes.js';

export type createPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /** The quiz title. */
  'quiz[title]': string;
  /** A description of the quiz. */
  'quiz[description]': string;
  /** The type of quiz. */
  'quiz[quiz_type]': string;
  /**
   * The assignment group id to put the assignment in. Defaults to the top
   * assignment group in the course. Only valid if the quiz is graded, i.e. if
   * quiz_type is "assignment" or "graded_survey".
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  'quiz[assignment_group_id]': number | string;
  /**
   * Time limit to take this quiz, in minutes. Set to null for no time limit.
   * Defaults to null.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  'quiz[time_limit]': number | string;
  /**
   * If true, quiz answers for multiple choice questions will be randomized
   * for each student. Defaults to false.
   *
   * Type: boolean
   */
  'quiz[shuffle_answers]': boolean | string;
  /**
   * Dictates whether or not quiz results are hidden from students. If null,
   * students can see their results after any attempt. If "always", students
   * can never see their results. If "until_after_last_attempt", students can
   * only see results after their last attempt. (Only valid if
   * allowed_attempts > 1). Defaults to null.
   */
  'quiz[hide_results]': string;
  /**
   * Only valid if hide_results=null If false, hides correct answers from
   * students when quiz results are viewed. Defaults to true.
   *
   * Type: boolean
   */
  'quiz[show_correct_answers]': boolean | string;
  /**
   * Only valid if show_correct_answers=true and allowed_attempts > 1 If true,
   * hides correct answers from students when quiz results are viewed until
   * they submit the last attempt for the quiz. Defaults to false.
   *
   * Type: boolean
   */
  'quiz[show_correct_answers_last_attempt]': boolean | string;
  /**
   * Only valid if show_correct_answers=true If set, the correct answers will
   * be visible by students only after this date, otherwise the correct
   * answers are visible once the student hands in their quiz submission.
   *
   * Format: date-time
   */
  'quiz[show_correct_answers_at]': string;
  /**
   * Only valid if show_correct_answers=true If set, the correct answers will
   * stop being visible once this date has passed. Otherwise, the correct
   * answers will be visible indefinitely.
   *
   * Format: date-time
   */
  'quiz[hide_correct_answers_at]': string;
  /**
   * Number of times a student is allowed to take a quiz. Set to -1 for
   * unlimited attempts. Defaults to 1.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  'quiz[allowed_attempts]': number | string;
  /**
   * Required and only valid if allowed_attempts > 1. Scoring policy for a
   * quiz that students can take multiple times. Defaults to "keep_highest".
   */
  'quiz[scoring_policy]': string;
  /**
   * If true, shows quiz to student one question at a time. Defaults to false.
   *
   * Type: boolean
   */
  'quiz[one_question_at_a_time]': boolean | string;
  /**
   * Only valid if one_question_at_a_time=true If true, questions are locked
   * after answering. Defaults to false.
   *
   * Type: boolean
   */
  'quiz[cant_go_back]': boolean | string;
  /**
   * Restricts access to the quiz with a password. For no access code
   * restriction, set to null. Defaults to null.
   */
  'quiz[access_code]': string;
  /**
   * Restricts access to the quiz to computers in a specified IP range.
   * Filters can be a comma-separated list of addresses, or an address
   * followed by a mask
   *
   * Examples: "192.168.217.1" "192.168.217.1/24"
   * "192.168.217.1/255.255.255.0"
   *
   * For no IP filter restriction, set to null. Defaults to null.
   */
  'quiz[ip_filter]': string;
  /**
   * The day/time the quiz is due. Accepts times in ISO 8601 format, e.g.
   * 2011-10-21T18:48Z.
   *
   * Format: date-time
   */
  'quiz[due_at]': string;
  /**
   * The day/time the quiz is locked for students. Accepts times in ISO 8601
   * format, e.g. 2011-10-21T18:48Z.
   *
   * Format: date-time
   */
  'quiz[lock_at]': string;
  /**
   * The day/time the quiz is unlocked for students. Accepts times in ISO 8601
   * format, e.g. 2011-10-21T18:48Z.
   *
   * Format: date-time
   */
  'quiz[unlock_at]': string;
  /**
   * Whether the quiz should have a draft state of published or unpublished.
   * NOTE: If students have started taking the quiz, or there are any
   * submissions for the quiz, you may not unpublish a quiz and will recieve
   * an error.
   *
   * Type: boolean
   */
  'quiz[published]': boolean | string;
  /**
   * Whether students should be prevented from viewing their quiz results past
   * the first time (right after they turn the quiz in.) Only valid if
   * "hide_results" is not set to "always". Defaults to false.
   *
   * Type: boolean
   */
  'quiz[one_time_results]': boolean | string;
  /**
   * Whether this quiz is only visible to overrides (Only useful if
   * 'differentiated assignments' account setting is on) Defaults to false.
   *
   * Type: boolean
   */
  'quiz[only_visible_to_overrides]': boolean | string;
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
 * Create a quiz
 *
 * Create a new quiz for this course.
 *
 * Nickname: create_quiz
 */
export async function create(options: Options) {
  const response = await client().fetchAs<Quiz>(
    `/api/v1/courses/{course_id}/quizzes`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
