import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { SisImport } from '../../../../../Resources/SisImports.js';

export type abort_sis_importPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type abort_sis_importSearchParameters = Masquerade;

type Options = (
  | {
      path: abort_sis_importPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: abort_sis_importPathParameters;
    }
) &
  (
    | {
        query?: Partial<abort_sis_importSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<abort_sis_importSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: abort_sis_importSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: abort_sis_importSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Abort SIS import
 *
 * Abort a SIS import that has not completed.
 *
 * Aborting a sis batch that is running can take some time for every process to
 * see the abort event. Subsequent sis batches begin to process 10 minutes after
 * the abort to allow each process to clean up properly.
 *
 * Nickname: abort_sis_import
 */
export async function abort_sis_import(options: Options) {
  const response = await client().fetchAs<SisImport>(
    `/api/v1/accounts/{account_id}/sis_imports/{id}/abort`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
