type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Reset course favorites
 *
 * Reset the current user's course favorites to the default automatically
 * generated list of enrolled courses
 *
 * Nickname: reset_course_favorites
 */
export async function reset_course_favorites({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/users/self/favorites/courses`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
