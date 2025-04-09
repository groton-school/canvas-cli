import { client } from '../../../../Client.js';
import { Collaborator } from '../../../../Resources/Collaborations.js';

type listPathParameters = {
  /** ID */
  id: string;
};

type listSearchParameters = {
  /**
   * - "collaborator_lti_id": Optional information to include with each member.
   *   Represents an identifier to be used for the member in an LTI context.
   * - "avatar_image_url": Optional information to include with each member. The
   *   url for the avatar of a collaborator with type 'user'.
   */
  include: string[];
};

type Options = {
  pathParams: listPathParameters;
  searchParams?: listSearchParameters;
};

/**
 * List members of a collaboration.
 *
 * A paginated list of the collaborators of a given collaboration
 *
 * Nickname: list_members_of_collaboration
 */
export async function list({ pathParams, searchParams }: Options) {
  return await client().fetchAs<string[]>(`/v1/collaborations/{id}/members`, {
    method: 'GET',
    pathParams,
    searchParams
  });
}
