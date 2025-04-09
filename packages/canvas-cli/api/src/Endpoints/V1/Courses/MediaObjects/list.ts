import { client } from '../../../../Client.js';
import { MediaObject } from '../../../../Resources/MediaObjects.js';

type listPathParameters = {
  /** ID */
  course_id: string;
};

type listSearchParameters = {
  /**
   * Field to sort on. Default is "title"
   *
   * Title:: sorts on user_entered_title if available, title if not.
   *
   * Created_at:: sorts on the object's creation time.
   */
  sort: string;
  /** Sort direction. Default is "asc" */
  order: string;
  /**
   * Array of data to exclude. By excluding "sources" and "tracks", the api
   * will not need to query kaltura, which greatly speeds up its response.
   *
   * Sources:: Do not query kaltura for media_sources tracks:: Do not query
   * kaltura for media_tracks
   */
  exclude: string[];
};

type Options = {
  pathParams: listPathParameters;
  searchParams?: listSearchParameters;
};

/**
 * List Media Objects
 *
 * Returns media objects created by the user making the request. When using the
 * second version, returns media objects associated with the given course.
 *
 * Nickname: list_media_objects_courses_media_objects
 */
export async function list({ pathParams, searchParams }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/media_objects`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
