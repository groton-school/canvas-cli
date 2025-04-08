import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Templated file for importing a rubric
 *
 * Nickname: templated_file_for_importing_rubric
 */
export async function templated_file_for_importing_rubric({
  parameters
}: Options) {
  return await client().fetchAs<string>(`/v1/rubrics/upload_template`, {
    method: 'GET',
    params: parameters
  });
}
