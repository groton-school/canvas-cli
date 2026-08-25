import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade, Paginated } from '#client';
import { MediaObject } from '../../../../Resources/MediaObjects.js';

export type listPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  course_id: string | number;
};

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * Field to sort on. Default is &quot;title&quot;

title:: sorts on user_entered_title if available, title if not.

created_at:: sorts on the object&#x27;s creation time.
     *
     * 
     *
     * 
     */
    sort: string;
    /**
     * Sort direction. Default is &quot;asc&quot;
     *
     *
     *
     *
     */
    order: string;
    /**
     * Array of data to exclude. By excluding &quot;sources&quot; and &quot;tracks&quot;,
the api will not need to query kaltura, which greatly
speeds up its response.

sources:: Do not query kaltura for media_sources
tracks:: Do not query kaltura for media_tracks
     *
     * 
     *
     * 
     */
    exclude: string[];
  }>;

type Options = (
  | {
      path: listPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: listPathParameters;
    }
) &
  (
    | {
        query?: Partial<listSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<listSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: listSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: listSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * List Media Objects
 *
 * Returns media objects created by the user making the request. When
using the second version, returns media objects associated with
the given course.
 *
 * nickname: list_media_objects_courses_media_objects
 *
 * 
 *
 * 
 */
export async function list(options: Options) {
  const response = await client().fetchAs<MediaObject[]>(
    `/api/v1/courses/{course_id}/media_objects`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
