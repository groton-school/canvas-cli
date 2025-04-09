import { client } from '../../../../Client.js';
import { File } from '../../../../Resources/Files.js';

type reset_link_verifierPathParameters = {
  /** ID */
  id: string;
};

type Options = {
  pathParams: reset_link_verifierPathParameters;
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
export async function reset_link_verifier({ pathParams }: Options) {
  return await client().fetchAs<File>(`/v1/files/{id}/reset_verifier`, {
    method: 'POST',
    pathParams
  });
}
