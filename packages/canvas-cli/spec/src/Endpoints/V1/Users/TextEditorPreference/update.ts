type Parameters = {
  /** The identifier for the editor. */
  text_editor_preference: string;
};

type Options = {
  parameters: Parameters;
};

/**
 * Update text editor preference
 *
 * Updates a user's default choice for text editor. This allows the Choose an
 * Editor propmts to preload the user's preference.
 *
 * Nickname: update_text_editor_preference
 */
export async function update({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/users/{id}/text_editor_preference`, {
      method: 'PUT',
      body: parameters
    })
  ).json();
}
