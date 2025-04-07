type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Abort all pending SIS imports
 *
 * Abort already created but not processed or processing SIS imports.
 *
 * Nickname: abort_all_pending_sis_imports
 */
export async function abort_all_pending_sis_imports({
  parameters
}: Options): Promise<boolean> {
  return await (
    await fetch(`/v1/accounts/{account_id}/sis_imports/abort_all_pending`, {
      method: 'PUT',
      body: parameters
    })
  ).json();
}
