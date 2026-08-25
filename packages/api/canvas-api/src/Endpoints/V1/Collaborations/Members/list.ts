import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade, Paginated } from '#client';
import { Collaborator } from '../../../../Resources/Collaborations.js';

export type listPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  id: string | number;
};

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * - &quot;collaborator_lti_id&quot;: Optional information to include with each member.
  Represents an identifier to be used for the member in an LTI context.
- &quot;avatar_image_url&quot;: Optional information to include with each member.
  The url for the avatar of a collaborator with type &#x27;user&#x27;.
     *
     * 
     *
     * 
     */
    include: string[];
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
 * List members of a collaboration.
 *
 * A paginated list of the collaborators of a given collaboration
 *
 * nickname: list_members_of_collaboration
 *
 *
 *
 *
 */
export async function list(options: Options) {
  const response = await client().fetchAs<Collaborator[]>(
    `/api/v1/collaborations/{id}/members`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
