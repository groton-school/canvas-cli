import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
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

type Options = (
  | {
      path: reset_link_verifierPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: reset_link_verifierPathParameters;
    }
) &
  (
    | {
        query?: Partial<reset_link_verifierSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<reset_link_verifierSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<reset_link_verifierSearchParameters>;
        /** @deprecated Use {Options.query} */
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
