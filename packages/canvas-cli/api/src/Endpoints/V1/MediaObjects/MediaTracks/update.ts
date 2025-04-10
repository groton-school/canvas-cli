import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { MediaTrack } from '../../../../Resources/MediaObjects.js';

export type updatePathParameters = {
  /** ID */
  media_object_id: string;
};

export type updateSearchParameters = Paginated;

export type updateFormParameters = {
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
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      params?: updateFormParameters;
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
 * Nickname: update_media_tracks_media_objects
 */
export async function update({ pathParams, params }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/media_objects/{media_object_id}/media_tracks`,
    {
      method: 'PUT',
      pathParams,
      params
    }
  );
}
