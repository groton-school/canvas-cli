type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List live assessments
 *
 * Returns a paginated list of live assessments.
 *
 * Nickname: list_live_assessments
 */
export async function list({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/courses/{course_id}/live_assessments`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
