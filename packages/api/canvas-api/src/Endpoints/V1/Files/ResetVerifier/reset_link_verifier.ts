import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { File } from '../../../../Resources/Files.js';

export type reset_link_verifierPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type reset_link_verifierSearchParameters = Masquerade;

type Options = {
  pathParams: reset_link_verifierPathParameters;
} & (
  | {
      searchParams?: Partial<reset_link_verifierSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: reset_link_verifierSearchParameters;
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
