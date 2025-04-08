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
 * Nickname: update_media_object_media_objects
 */
export async function update({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/media_objects/{media_object_id}`, {
    method: 'PUT',
    params: parameters
  });
}
