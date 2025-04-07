import { RubricImport } from '';

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
 * Nickname: get_status_of_rubric_import_accounts
 */
export async function get({ parameters }: Options): Promise<RubricImport> {
  return await (
    await fetch(`/v1/accounts/{account_id}/rubrics/upload/{id}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
