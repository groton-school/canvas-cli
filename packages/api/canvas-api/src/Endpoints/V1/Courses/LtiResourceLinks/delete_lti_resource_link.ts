import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { LtiResourceLink } from '../../../../Resources/LtiResourceLinks.js';

export type delete_lti_resource_linkPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type delete_lti_resource_linkSearchParameters = Masquerade;

type Options = (
  | {
      path: delete_lti_resource_linkPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_lti_resource_linkPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_lti_resource_linkSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<delete_lti_resource_linkSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: delete_lti_resource_linkSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: delete_lti_resource_linkSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Delete an LTI Resource Link
 *
 * Delete the specified resource link. The ID can be in the standard Canvas
 * format ("1"), or in these special formats:
 *
 * - Resource_link_uuid:<uuid> - Find the resource link by its resource_link_uuid
 * - Lookup_uuid:<uuid> - Find the resource link by its lookup_uuid
 *
 * Only links that are not associated with Assignments, Module Items, or
 * Collaborations can be deleted.
 *
 * Nickname: delete_lti_resource_link
 */
export async function delete_lti_resource_link(options: Options) {
  const response = await client().fetchAs<LtiResourceLink>(
    `/api/v1/courses/{course_id}/lti_resource_links/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
