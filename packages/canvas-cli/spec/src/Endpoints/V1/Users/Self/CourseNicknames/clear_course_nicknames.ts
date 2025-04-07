type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Clear course nicknames
 *
 * Remove all stored course nicknames.
 *
 * Nickname: clear_course_nicknames
 */
export async function clear_course_nicknames({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/users/self/course_nicknames`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
