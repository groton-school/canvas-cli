import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { MediaTrack } from '../../../../Resources/MediaObjects.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  media_object_id: string | number;
};

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * By default, index returns id, locale, kind, media_object_id, and user_id
     * for each of the result MediaTracks. Use include[] to add additional
     * fields. For example include[]=content
     */
    include: string[];
  }>;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    }
);

/**
 * List media tracks for a Media Object or Attachment
 *
 * List the media tracks associated with a media object or attachment
 *
 * Nickname: list_media_tracks_for_media_object_or_attachment_media_objects
 */
export async function list(options: Options) {
  const response = await client().fetchAs<MediaTrack[]>(
    `/api/v1/media_objects/{media_object_id}/media_tracks`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
