import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { PageRevision } from '../../../../../Resources/Pages.js';

export type revert_to_revision_coursesPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  course_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  url_or_id: string | number;
  /**
     * The revision to revert to (use the
{api:WikiPagesApiController#revisions List Revisions API} to see
available revisions)
     *
     * type: integer

format: 'int64'
     *
     * 
     */
  revision_id: number | string;
};

export type revert_to_revision_coursesSearchParameters = Masquerade;

type Options = (
  | {
      path: revert_to_revision_coursesPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: revert_to_revision_coursesPathParameters;
    }
) &
  (
    | {
        query?: Partial<revert_to_revision_coursesSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<revert_to_revision_coursesSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: revert_to_revision_coursesSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: revert_to_revision_coursesSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Revert to revision
 *
 * Revert a page to a prior revision.
 *
 * nickname: revert_to_revision_courses
 *
 *
 *
 *
 */
export async function revert_to_revision_courses(options: Options) {
  const response = await client().fetchAs<PageRevision>(
    `/api/v1/courses/{course_id}/pages/{url_or_id}/revisions/{revision_id}`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
