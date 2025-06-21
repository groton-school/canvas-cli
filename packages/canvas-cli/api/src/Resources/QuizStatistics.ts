import { JSONObject } from '@battis/typescript-tricks';

export type QuizStatistics = {
  /**
   * The ID of the quiz statistics report.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  id: number | string;
  /**
   * The ID of the Quiz the statistics report is for. NOTE: AVAILABLE ONLY IN
   * NON-JSON-API REQUESTS.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  quiz_id: number | string;
  /**
   * Whether there are any students that have made mutliple submissions for this
   * quiz.
   *
   * Type: boolean
   */
  multiple_attempts_exist: boolean | string;
  /**
   * In the presence of multiple attempts, this field describes whether the
   * statistics describe all the submission attempts and not only the latest
   * ones.
   *
   * Type: boolean
   */
  includes_all_versions: boolean | string;
  /**
   * The time at which the statistics were generated, which is usually after the
   * occurrence of a quiz event, like a student submitting it.
   *
   * Format: date-time
   */
  generated_at: string;
  /** The API HTTP/HTTPS URL to this quiz statistics. */
  url: string;
  /** The HTTP/HTTPS URL to the page where the statistics can be seen visually. */
  html_url: string;
  /** Question-specific statistics for each question and its answers. */
  question_statistics: QuizStatisticsQuestionStatistics;
  /** Question-specific statistics for each question and its answers. */
  submission_statistics: QuizStatisticsSubmissionStatistics;
  /**
   * JSON-API construct that contains links to media related to this quiz
   * statistics object. NOTE: AVAILABLE ONLY IN JSON-API REQUESTS.
   */
  links: QuizStatisticsLinks;
};

/** Links to media related to QuizStatistics. */
export type QuizStatisticsLinks = {
  /** HTTP/HTTPS API URL to the quiz this statistics describe. */
  quiz: string;
};

/** Statistics for submissions made to a specific quiz question. */
export type QuizStatisticsQuestionStatistics = {
  /**
   * Number of students who have provided an answer to this question. Blank or
   * empty responses are not counted.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  responses: number | string;
  /** Statistics related to each individual pre-defined answer. */
  answers: QuizStatisticsAnswerStatistics;
};

/**
 * Statistics for a specific pre-defined answer in a Multiple-Choice or
 * True/False quiz question.
 */
export type QuizStatisticsAnswerStatistics = {
  /**
   * ID of the answer.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  id: number | string;
  /** The text attached to the answer. */
  text: string;
  /**
   * An integer to determine correctness of the answer. Incorrect answers should
   * be 0, correct answers should 100
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  weight: number | string;
  /**
   * Number of students who have chosen this answer.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  responses: number | string;
};

/**
 * A point-biserial construct for a single pre-defined answer in a
 * Multiple-Choice or True/False question.
 */
export type QuizStatisticsAnswerPointBiserial = {
  /**
   * ID of the answer the point biserial is for.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  answer_id: number | string;
  /**
   * The point biserial value for this answer. Value ranges between -1 and 1.
   *
   * Type: number
   */
  point_biserial: number | string;
  /**
   * Convenience attribute that denotes whether this is the correct answer as
   * opposed to being a distractor. This is mutually exclusive with the
   * `distractor` value
   *
   * Type: boolean
   */
  correct: boolean | string;
  /**
   * Convenience attribute that denotes whether this is a distractor answer and
   * not the correct one. This is mutually exclusive with the `correct` value
   *
   * Type: boolean
   */
  distractor: boolean | string;
};

/** Generic statistics for all submissions for a quiz. */
export type QuizStatisticsSubmissionStatistics = {
  /**
   * The number of students who have taken the quiz.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  unique_count: number | string;
  /**
   * The mean of the student submission scores.
   *
   * Type: number
   */
  score_average: number | string;
  /**
   * The highest submission score.
   *
   * Type: number
   */
  score_high: number | string;
  /**
   * The lowest submission score.
   *
   * Type: number
   */
  score_low: number | string;
  /**
   * Standard deviation of the submission scores.
   *
   * Type: number
   */
  score_stdev: number | string;
  /**
   * A percentile distribution of the student scores, each key is the percentile
   * (ranges between 0 and 100%) while the value is the number of students who
   * received that score.
   *
   * Object
   */
  scores: JSONObject;
  /**
   * The mean of the number of questions answered correctly by each student.
   *
   * Type: number
   */
  correct_count_average: number | string;
  /**
   * The mean of the number of questions answered incorrectly by each student.
   *
   * Type: number
   */
  incorrect_count_average: number | string;
  /**
   * The average time spent by students while taking the quiz.
   *
   * Type: number
   */
  duration_average: number | string;
};
