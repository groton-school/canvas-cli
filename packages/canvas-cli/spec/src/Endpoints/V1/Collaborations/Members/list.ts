import { Collaborator } from '../../../../Resources/Collaborations.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List members of a collaboration.
 *
 * A paginated list of the collaborators of a given collaboration
 *
 * Nickname: list_members_of_collaboration
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/collaborations/{id}/members`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
