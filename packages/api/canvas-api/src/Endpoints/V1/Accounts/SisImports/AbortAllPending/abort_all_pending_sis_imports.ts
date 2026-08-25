import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type abort_all_pending_sis_importsPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  account_id: string | number;
};

export type abort_all_pending_sis_importsSearchParameters = Masquerade;

type Options = (
  | {
      path: abort_all_pending_sis_importsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: abort_all_pending_sis_importsPathParameters;
    }
) &
  (
    | {
        query?: Partial<abort_all_pending_sis_importsSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<abort_all_pending_sis_importsSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: abort_all_pending_sis_importsSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: abort_all_pending_sis_importsSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Abort all pending SIS imports
 *
 * Abort already created but not processed or processing SIS imports.
 *
 * nickname: abort_all_pending_sis_imports
 *
 *
 *
 *
 */
export async function abort_all_pending_sis_imports(options: Options) {
  const response = await client().fetchAs<boolean | string>(
    `/api/v1/accounts/{account_id}/sis_imports/abort_all_pending`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
