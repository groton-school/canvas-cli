type Parameters = {
  /**
   * No description
   *
   * Format: int64
   */
  order: string[];
};

type Options = {
  parameters: Parameters;
};

/**
 * Reorder custom columns
 *
 * Puts the given columns in the specified order
 *
 * <b>200 OK</b> is returned if successful
 *
 * Nickname: reorder_custom_columns
 */
export async function reorder_custom_columns({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/courses/{course_id}/custom_gradebook_columns/reorder`, {
      method: 'POST',
      body: parameters
    })
  ).json();
}
