import { client } from '../../../../../Client.js';

export type delete_question_groupPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  quiz_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_question_groupPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Delete a question group
 *
 * Delete a question group
 *
 * <b>204 No Content<b> response code is returned if the deletion was
 * successful.
 *
 * Nickname: delete_question_group
 */
export async function delete_question_group({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/quizzes/{quiz_id}/groups/{id}`,
    {
      method: 'DELETE',
      pathParams
    }
  );
}
