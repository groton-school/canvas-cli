import { client } from '../../../../Client.js';

type Options =
  | {
      strict?: false;
    }
  | {
      strict: true;
    };

/**
 * Templated file for importing a rubric
 *
 * Nickname: templated_file_for_importing_rubric
 */
export async function templated_file_for_importing_rubric(options: Options) {
  return await client().fetchAs<string>(`/api/v1/rubrics/upload_template`, {
    method: 'GET',
    ...options
  });
}
