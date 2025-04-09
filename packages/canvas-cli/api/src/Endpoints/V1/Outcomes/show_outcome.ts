import { client } from '../../../Client.js';
import { Outcome } from '../../../Resources/Outcomes.js';

type show_outcomePathParameters = {
  /** ID */
  id: string;
};

type show_outcomeSearchParameters = {
  /**
   * If defaults are requested, then color and mastery level defaults will be
   * added to outcome ratings in the result. This will only take effect if the
   * Account Level Mastery Scales FF is DISABLED
   */
  add_defaults: boolean;
};

type Options = {
  pathParams: show_outcomePathParameters;
  searchParams?: show_outcomeSearchParameters;
};

/**
 * Show an outcome
 *
 * Returns the details of the outcome with the given id.
 *
 * Nickname: show_outcome
 */
export async function show_outcome({ pathParams, searchParams }: Options) {
  return await client().fetchAs<Outcome>(`/v1/outcomes/{id}`, {
    method: 'GET',
    pathParams,
    searchParams
  });
}
