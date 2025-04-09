import { client } from '../../../../Client.js';
import { MediaTrack } from '../../../../Resources/MediaObjects.js';

export type listPathParameters = {
  /** ID */
  attachment_id: string;
};

export type listSearchParameters = {
  /**
   * By default, index returns id, locale, kind, media_object_id, and user_id
   * for each of the result MediaTracks. Use include[] to add additional
   * fields. For example include[]=content
   */
  include: string[];
};

type Options = {
  pathParams: listPathParameters;
  searchParams?: listSearchParameters;
};

/**
 * List media tracks for a Media Object or Attachment
 *
 * List the media tracks associated with a media object or attachment
 *
 * Nickname: list_media_tracks_for_media_object_or_attachment_media_attachments
 */
export async function list({ pathParams, searchParams }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/media_attachments/{attachment_id}/media_tracks`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
