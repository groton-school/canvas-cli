export type QuizStatistics = {
  /**
   * The ID of the quiz statistics report.
   *
   * Format: int64
   */
  id: number;
  /**
   * The ID of the Quiz the statistics report is for. NOTE: AVAILABLE ONLY IN
   * NON-JSON-API REQUESTS.
   *
   * Format: int64
   */
  quiz_id: number;
  /**
   * Whether there are any students that have made mutliple submissions for this
   * quiz.
   */
  multiple_attempts_exist: boolean;
  /**
   * In the presence of multiple attempts, this field describes whether the
   * statistics describe all the submission attempts and not only the latest
   * ones.
   */
  includes_all_versions: boolean;
  /**
   * The time at which the statistics were generated, which is usually after the
   * occurrence of a quiz event, like a student submitting it.
   *
   * Format: 'date-time'
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
   * Format: int64
   */
  responses: number;
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
   * Format: int64
   */
  id: number;
  /** The text attached to the answer. */
  text: string;
  /**
   * An integer to determine correctness of the answer. Incorrect answers should
   * be 0, correct answers should 100
   *
   * Format: int64
   */
  weight: number;
  /**
   * Number of students who have chosen this answer.
   *
   * Format: int64
   */
  responses: number;
};

/**
 * A point-biserial construct for a single pre-defined answer in a
 * Multiple-Choice or True/False question.
 */
export type QuizStatisticsAnswerPointBiserial = {
  /**
   * ID of the answer the point biserial is for.
   *
   * Format: int64
   */
  answer_id: number;
  /** The point biserial value for this answer. Value ranges between -1 and 1. */
  point_biserial: number;
  /**
   * Convenience attribute that denotes whether this is the correct answer as
   * opposed to being a distractor. This is mutually exclusive with the
   * `distractor` value
   */
  correct: boolean;
  /**
   * Convenience attribute that denotes whether this is a distractor answer and
   * not the correct one. This is mutually exclusive with the `correct` value
   */
  distractor: boolean;
};

/** Generic statistics for all submissions for a quiz. */
export type QuizStatisticsSubmissionStatistics = {
  /**
   * The number of students who have taken the quiz.
   *
   * Format: int64
   */
  unique_count: number;
  /** The mean of the student submission scores. */
  score_average: number;
  /** The highest submission score. */
  score_high: number;
  /** The lowest submission score. */
  score_low: number;
  /** Standard deviation of the submission scores. */
  score_stdev: number;
  /**
   * A percentile distribution of the student scores, each key is the percentile
   * (ranges between 0 and 100%) while the value is the number of students who
   * received that score.
   */
  scores: unknown;
  /** The mean of the number of questions answered correctly by each student. */
  correct_count_average: number;
  /** The mean of the number of questions answered incorrectly by each student. */
  incorrect_count_average: number;
  /** The average time spent by students while taking the quiz. */
  duration_average: number;
};
