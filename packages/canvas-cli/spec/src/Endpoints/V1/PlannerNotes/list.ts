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
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/planner_notes`, { method: 'GET', body: parameters })
  ).json();
}
