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
export async function reset_link_verifier({
  parameters
}: Options): Promise<File> {
  return await (
    await fetch(`/v1/files/{id}/reset_verifier`, {
      method: 'POST',
      body: parameters
    })
  ).json();
}
