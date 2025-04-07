type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete/Conclude a course
 *
 * Delete or conclude an existing course
 *
 * Nickname: delete_conclude_course
 */
export async function delete_conclude_course({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/courses/{id}`, { method: 'DELETE', body: parameters })
  ).json();
}
