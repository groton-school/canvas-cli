import { client } from '../../../Client.js';
import { PlannerNote } from '../../../Resources/Planner.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List planner notes
 *
 * Retrieve the paginated list of planner notes
 *
 * Retrieve planner note for a user
 *
 * Nickname: list_planner_notes
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(`/v1/planner_notes`, {
    method: 'GET',
    params: parameters
  });
}
