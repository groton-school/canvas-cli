import { Outcome } from '../../../Resources/Outcomes.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Show an outcome
 *
 * Returns the details of the outcome with the given id.
 *
 * Nickname: show_outcome
 */
export async function show_outcome({ parameters }: Options): Promise<Outcome> {
  return await (
    await fetch(`/v1/outcomes/{id}`, { method: 'GET', body: parameters })
  ).json();
}
