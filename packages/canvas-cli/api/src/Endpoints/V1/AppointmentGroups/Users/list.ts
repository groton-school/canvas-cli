import { client } from '../../../../Client.js';

export type listPathParameters = {
  /** ID */
  id: string;
};

export type listSearchParameters = {
  /** Limits results to the a given participation status, defaults to "all" */
  registration_status: string;
};

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams?: listSearchParameters;
      strict: true;
    }
);

/**
 * List user participants
 *
 * A paginated list of users that are (or may be) participating in this
 * appointment group. Refer to the Users API for the response fields. Returns no
 * results for appointment groups with the "Group" participant_type.
 *
 * Nickname: list_user_participants
 */
export async function list({ pathParams, searchParams }: Options) {
  return await client().fetchAs<void>(`/v1/appointment_groups/{id}/users`, {
    method: 'GET',
    pathParams,
    searchParams
  });
}
