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
export async function delete_planner_note({
  parameters
}: Options): Promise<PlannerNote> {
  return await (
    await fetch(`/v1/planner_notes/{id}`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
