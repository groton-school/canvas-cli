import { client } from '../../../../Client.js';
import { MediaTrack } from '../../../../Resources/MediaObjects.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List media tracks for a Media Object or Attachment
 *
 * List the media tracks associated with a media object or attachment
 *
 * Nickname: list_media_tracks_for_media_object_or_attachment_media_attachments
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/media_attachments/{attachment_id}/media_tracks`,
    { method: 'GET', params: parameters }
  );
}
