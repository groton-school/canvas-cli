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
}: Options): Promise<string> {
  return await (
    await fetch(`/v1/rubrics/upload_template`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
