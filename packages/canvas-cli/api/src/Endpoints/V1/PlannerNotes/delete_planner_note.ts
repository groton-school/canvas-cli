import { client } from '../../../Client.js';
import { PlannerNote } from '../../../Resources/Planner.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete a planner note
 *
 * Delete a planner note for the current user
 *
 * Nickname: delete_planner_note
 */
export async function delete_planner_note({ parameters }: Options) {
  return await client().fetchAs<PlannerNote>(`/v1/planner_notes/{id}`, {
    method: 'DELETE',
    params: parameters
  });
}
