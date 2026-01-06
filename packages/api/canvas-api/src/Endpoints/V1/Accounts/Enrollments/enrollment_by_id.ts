import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { Enrollment } from '../../../../Resources/Enrollments.js';

export type enrollment_by_idPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
  /**
   * The ID of the enrollment object
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  id: number | string;
};

export type enrollment_by_idSearchParameters = Masquerade;

type Options = {
  pathParams: enrollment_by_idPathParameters;
} & (
  | {
      searchParams?: Partial<enrollment_by_idSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: enrollment_by_idSearchParameters;
      strict: true;
    }
);

/**
 * Enrollment by ID
 *
 * Get an Enrollment object by Enrollment ID
 *
 * Nickname: enrollment_by_id
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
