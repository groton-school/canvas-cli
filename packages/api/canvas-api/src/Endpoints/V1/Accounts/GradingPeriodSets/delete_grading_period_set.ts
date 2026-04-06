import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type delete_grading_period_setPathParameters = {
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

export type delete_grading_period_setSearchParameters = Masquerade;

type Options = (
  | {
      path: delete_grading_period_setPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_grading_period_setPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_grading_period_setSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<delete_grading_period_setSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: delete_grading_period_setSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: delete_grading_period_setSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Delete a grading period set
 *
 * <b>204 No Content</b> response code is returned if the deletion was
 * successful.
 *
 * Nickname: delete_grading_period_set
 */
export async function delete_grading_period_set(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/accounts/{account_id}/grading_period_sets/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
