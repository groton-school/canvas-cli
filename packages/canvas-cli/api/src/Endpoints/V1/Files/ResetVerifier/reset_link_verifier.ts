import { client } from '../../../../Client.js';
import { File } from '../../../../Resources/Files.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Reset link verifier
 *
 * Resets the link verifier. Any existing links to the file using the previous
 * hard-coded "verifier" parameter will no longer automatically grant access.
 *
 * Must have manage files and become other users permissions
 *
 * Nickname: reset_link_verifier
 */
export async function reset_link_verifier({ parameters }: Options) {
  return await client().fetchAs<File>(`/v1/files/{id}/reset_verifier`, {
    method: 'POST',
    params: parameters
  });
}
