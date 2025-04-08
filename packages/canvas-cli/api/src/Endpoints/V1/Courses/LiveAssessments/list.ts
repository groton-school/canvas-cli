import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List live assessments
 *
 * Returns a paginated list of live assessments.
 *
 * Nickname: list_live_assessments
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/live_assessments`,
    { method: 'GET', params: parameters }
  );
}
