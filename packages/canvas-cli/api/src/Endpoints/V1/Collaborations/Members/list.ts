import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { Collaborator } from '../../../../Resources/Collaborations.js';

export type listPathParameters = {
  /** ID */
  id: string;
};

export type listSearchParameters = {
  /**
   * - "collaborator_lti_id": Optional information to include with each member.
   *   Represents an identifier to be used for the member in an LTI context.
   * - "avatar_image_url": Optional information to include with each member. The
   *   url for the avatar of a collaborator with type 'user'.
   */
  include: string[];
} & Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams?: listSearchParameters;
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
export async function list({ pathParams, searchParams }: Options) {
  return await client().fetchAs<string[]>(`/v1/collaborations/{id}/members`, {
    method: 'GET',
    pathParams,
    searchParams
  });
}
