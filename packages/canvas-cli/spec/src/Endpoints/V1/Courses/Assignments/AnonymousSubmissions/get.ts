type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a single submission by anonymous id
 *
 * Get a single submission, based on the submission's anonymous id.
 *
 * Nickname: get_single_submission_by_anonymous_id_courses
 */
export async function get({ parameters }: Options): Promise<void> {
  return await (
    await fetch(
      `/v1/courses/{course_id}/assignments/{assignment_id}/anonymous_submissions/{anonymous_id}`,
      { method: 'GET', body: parameters }
    )
  ).json();
}
