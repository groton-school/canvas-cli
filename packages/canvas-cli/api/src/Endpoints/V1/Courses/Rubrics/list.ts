import { client } from '../../../../Client.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
};

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * List rubrics
 *
 * Returns the paginated list of active rubrics for the current context.
 *
 * Nickname: list_rubrics_courses
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<void>(`/v1/courses/{course_id}/rubrics`, {
    method: 'GET',
    pathParams
  });
}
