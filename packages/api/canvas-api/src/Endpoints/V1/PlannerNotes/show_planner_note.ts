import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../Client.js';
import { PlannerNote } from '../../../Resources/Planner.js';

export type show_planner_notePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type show_planner_noteSearchParameters = Masquerade;

type Options = {
  pathParams: show_planner_notePathParameters;
} & (
  | {
      searchParams?: Partial<show_planner_noteSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: show_planner_noteSearchParameters;
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
export async function show_planner_note(options: Options) {
  const response = await client().fetchAs<PlannerNote>(
    `/api/v1/planner_notes/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
