type Parameters = {
  /** The new title. */
  user_entered_title: string;
};

type Options = {
  parameters: Parameters;
};

/**
 * Update Media Object
 *
 * Nickname: update_media_object_media_attachments
 */
export async function update({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/media_attachments/{attachment_id}`, {
      method: 'PUT',
      body: parameters
    })
  ).json();
}
