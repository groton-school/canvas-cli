import { client } from '../../../../../Client.js';
import { Hash } from '../../../../../Overrides.js';

export type updatePathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  quiz_id: string;
  /** ID */
  id: string;
};

export type updateFormParameters = {
  /**
   * The attempt number of the quiz submission that should be updated. This
   * attempt MUST be already completed.
   *
   * Format: 'int64'
   */
  'quiz_submissions[attempt]': number[];
  /**
   * Amount of positive or negative points to fudge the total score by.
   *
   * Format: 'float'
   */
  'quiz_submissions[fudge_points]': number[];
  /**
   * A set of scores and comments for each question answered by the student.
   * The keys are the question IDs, and the values are hashes of `score` and
   * `comment` entries. See {Appendix: Manual Scoring} for more on this
   * parameter.
   */
  'quiz_submissions[questions]': Hash[];
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      params: updateFormParameters;
      strict: true;
    }
);

/**
 * Update student question scores and comments.
 *
 * Update the amount of points a student has scored for questions they've
 * answered, provide comments for the student about their answer(s), or simply
 * fudge the total score by a specific amount of points.
 *
 * <b>Responses</b>
 *
 * <b>200 OK</b> if the request was successful <b>403 Forbidden</b> if you are
 * not a teacher in this course <b>400 Bad Request</b> if the attempt parameter
 * is missing or invalid <b>400 Bad Request</b> if the specified QS attempt is
 * not yet complete
 *
 * Nickname: update_student_question_scores_and_comments
 */
export async function update({ pathParams, params }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/quizzes/{quiz_id}/submissions/{id}`,
    {
      method: 'PUT',
      pathParams,
      params
    }
  );
}
