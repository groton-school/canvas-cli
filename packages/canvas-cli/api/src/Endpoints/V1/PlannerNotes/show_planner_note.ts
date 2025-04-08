import { client } from '../../../Client.js';
import { PlannerNote } from '../../../Resources/Planner.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Show a planner note
 *
 * Retrieve a planner note for the current user
 *
 * Nickname: show_planner_note
 */
export async function show_planner_note({ parameters }: Options) {
  return await client().fetchAs<PlannerNote>(`/v1/planner_notes/{id}`, {
    method: 'GET',
    params: parameters
  });
}
