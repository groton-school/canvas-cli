import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { Enrollment } from '../../../../Resources/Enrollments.js';

export type enrollment_by_idPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  account_id: string | number;
  /**
     * The ID of the enrollment object
     *
     * type: integer

format: 'int64'
     *
     * 
     */
  id: number | string;
};

export type enrollment_by_idSearchParameters = Masquerade;

type Options = (
  | {
      path: enrollment_by_idPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: enrollment_by_idPathParameters;
    }
) &
  (
    | {
        query?: Partial<enrollment_by_idSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<enrollment_by_idSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: enrollment_by_idSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: enrollment_by_idSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Enrollment by ID
 *
 * Get an Enrollment object by Enrollment ID
 *
 * nickname: enrollment_by_id
 *
 *
 *
 *
 */
export async function enrollment_by_id(options: Options) {
  const response = await client().fetchAs<Enrollment>(
    `/api/v1/accounts/{account_id}/enrollments/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
