type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get document annotations read state
 *
 * Return whether annotations made on a submitted document have been read by the
 * student
 *
 * Nickname: get_document_annotations_read_state_sections
 */
export async function get({ parameters }: Options): Promise<void> {
  return await (
    await fetch(
      `/v1/sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/document_annotations/read`,
      { method: 'GET', body: parameters }
    )
  ).json();
}
