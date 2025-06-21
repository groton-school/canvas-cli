import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { MediaTrack } from '../../../../Resources/MediaObjects.js';

export type updatePathParameters = {
  /** ID */
  attachment_id: string;
};

export type updateSearchParameters = Masquerade & Paginated;

export type updateFormParameters = Masquerade & {
  /**
   * By default, an update returns id, locale, kind, media_object_id, and
   * user_id for each of the result MediaTracks. Use include[] to add
   * additional fields. For example include[]=content
   */
  include: string[];
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      searchParams?: Partial<updateSearchParameters>;
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      searchParams: updateSearchParameters;
      params: updateFormParameters;
      strict: true;
    }
);

/**
 * Update Media Tracks
 *
 * Replace the media tracks associated with a media object or attachment with
 * the array of tracks provided in the body. Update will delete any existing
 * tracks not listed, leave untouched any tracks with no content field, and
 * update or create tracks with a content field.
 *
 * Nickname: update_media_tracks_media_attachments
 */
export async function update(options: Options) {
  const response = await client().fetchAs<MediaTrack[]>(
    `/api/v1/media_attachments/{attachment_id}/media_tracks`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
