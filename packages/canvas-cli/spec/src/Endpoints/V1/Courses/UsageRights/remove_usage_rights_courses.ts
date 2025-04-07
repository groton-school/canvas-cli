type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Remove usage rights
 *
 * Removes copyright and license information associated with one or more files
 *
 * Nickname: remove_usage_rights_courses
 */
export async function remove_usage_rights_courses({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/courses/{course_id}/usage_rights`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
