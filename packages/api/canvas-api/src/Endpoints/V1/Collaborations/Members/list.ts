import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { Collaborator } from '../../../../Resources/Collaborations.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * - "collaborator_lti_id": Optional information to include with each member.
     *   Represents an identifier to be used for the member in an LTI context.
     * - "avatar_image_url": Optional information to include with each member. The
     *   url for the avatar of a collaborator with type 'user'.
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
 * List members of a collaboration.
 *
 * A paginated list of the collaborators of a given collaboration
 *
 * Nickname: list_members_of_collaboration
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
