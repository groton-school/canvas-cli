import { RubricImport } from '';
import { client } from '../../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get the status of a rubric import
 *
 * Can return the latest rubric import for an account or course, or a specific
 * import by id
 *
 * Nickname: get_status_of_rubric_import_courses
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<RubricImport>(
    `/v1/courses/{course_id}/rubrics/upload/{id}`,
    { method: 'GET', params: parameters }
  );
}
