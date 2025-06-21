import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';

export type templated_file_for_importing_rubricSearchParameters = Masquerade;

type Options =
  | {
      searchParams?: Partial<templated_file_for_importing_rubricSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: templated_file_for_importing_rubricSearchParameters;
      strict: true;
    };

/**
 * Templated file for importing a rubric
 *
 * Nickname: templated_file_for_importing_rubric
 */
export async function templated_file_for_importing_rubric(options: Options) {
  const response = await client().fetchAs<string>(
    `/api/v1/rubrics/upload_template`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
