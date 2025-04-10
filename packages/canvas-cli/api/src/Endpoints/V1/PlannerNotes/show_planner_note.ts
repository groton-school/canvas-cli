import { client } from '../../../Client.js';
import { PlannerNote } from '../../../Resources/Planner.js';

export type show_planner_notePathParameters = {
  /** ID */
  id: string;
};

type Options = {
  pathParams: show_planner_notePathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Show a planner note
 *
 * Retrieve a planner note for the current user
 *
 * Nickname: show_planner_note
 */
export async function show_planner_note({ pathParams }: Options) {
  return await client().fetchAs<PlannerNote>(`/v1/planner_notes/{id}`, {
    method: 'GET',
    pathParams
  });
}
