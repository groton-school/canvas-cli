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
export async function show_planner_note({
  parameters
}: Options): Promise<PlannerNote> {
  return await (
    await fetch(`/v1/planner_notes/{id}`, { method: 'GET', body: parameters })
  ).json();
}
