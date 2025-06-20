import { client } from '../../../../Client.js';
import { File } from '../../../../Resources/Files.js';

export type reset_link_verifierPathParameters = {
  /** ID */
  id: string;
};

type Options = {
  pathParams: reset_link_verifierPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

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
export async function reset_link_verifier(options: Options) {
  const response = await client().fetchAs<File>(
    `/api/v1/files/{id}/reset_verifier`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
