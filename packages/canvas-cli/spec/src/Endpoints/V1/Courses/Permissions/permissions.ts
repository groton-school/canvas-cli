type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Permissions
 *
 * Returns permission information for the calling user in the given course. See
 * also the {api:AccountsController#permissions Account} and
 * {api:GroupsController#permissions Group} counterparts.
 *
 * Nickname: permissions
 */
export async function permissions({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/courses/{course_id}/permissions`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
