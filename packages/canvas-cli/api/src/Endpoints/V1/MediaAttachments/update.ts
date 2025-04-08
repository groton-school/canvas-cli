import { client } from '../../../Client.js';

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
export async function update({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/media_attachments/{attachment_id}`, {
    method: 'PUT',
    params: parameters
  });
}
