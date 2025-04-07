type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List student group participants
 *
 * A paginated list of student groups that are (or may be) participating in this
 * appointment group. Refer to the Groups API for the response fields. Returns
 * no results for appointment groups with the "User" participant_type.
 *
 * Nickname: list_student_group_participants
 */
export async function list({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/appointment_groups/{id}/groups`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
