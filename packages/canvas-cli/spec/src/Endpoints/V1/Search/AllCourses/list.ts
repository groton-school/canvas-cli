type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List all courses
 *
 * A paginated list of all courses visible in the public index
 *
 * Nickname: list_all_courses
 */
export async function list({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/search/all_courses`, { method: 'GET', body: parameters })
  ).json();
}
