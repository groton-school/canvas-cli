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
 * List live assessments
 *
 * Returns a paginated list of live assessments.
 *
 * Nickname: list_live_assessments
 */
export async function list(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/live_assessments`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
