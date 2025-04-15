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
      searchParams: listSearchParameters;
      strict: true;
    }
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
  return await client().fetchAs<void>(
    `/api/v1/appointment_groups/{id}/groups`,
    {
      method: 'GET',
      ...options
    }
  );
}
