type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Create or find a live assessment
 *
 * Creates or finds an existing live assessment with the given key and aligns it
 * with the linked outcome
 *
 * Nickname: create_or_find_live_assessment
 */
export async function create({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/courses/{course_id}/live_assessments`, {
      method: 'POST',
      body: parameters
    })
  ).json();
}
