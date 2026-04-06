import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type listSearchParameters = Masquerade &
  Partial<{
    /** Limits results to the a given participation status, defaults to "all" */
    registration_status: string;
  }>;

type Options = (
  | {
      path: listPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: listPathParameters;
    }
) &
  (
    | {
        query?: Partial<listSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<listSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: listSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: listSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * List student group participants
 *
 * A paginated list of student groups that are (or may be) participating in this
 * appointment group. Refer to the Groups API for the response fields. Returns
 * no results for appointment groups with the "User" participant_type.
 *
 * Nickname: list_student_group_participants
 */
export async function list(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/appointment_groups/{id}/groups`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
