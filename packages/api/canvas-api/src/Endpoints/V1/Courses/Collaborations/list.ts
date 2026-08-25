import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade, Paginated } from '#client';
import { Collaboration } from '../../../../Resources/Collaborations.js';

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

export type listSearchParameters = Masquerade & Paginated;

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
 * List collaborations
 *
 * A paginated list of collaborations the current user has access to in the
context of the course provided in the url. NOTE: this only returns
ExternalToolCollaboration type collaborations.

  curl https://<canvas>/api/v1/courses/1/collaborations/
 *
 * nickname: list_collaborations_courses
 *
 * 
 *
 * 
 */
export async function list(options: Options) {
  const response = await client().fetchAs<Collaboration[]>(
    `/api/v1/courses/{course_id}/collaborations`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
