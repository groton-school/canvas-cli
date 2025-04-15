import { client } from '../../../Client.js';
import { Outcome } from '../../../Resources/Outcomes.js';

export type show_outcomePathParameters = {
  /** ID */
  id: string;
};

export type show_outcomeSearchParameters = {
  /**
   * If defaults are requested, then color and mastery level defaults will be
   * added to outcome ratings in the result. This will only take effect if the
   * Account Level Mastery Scales FF is DISABLED
   */
  add_defaults: boolean;
};

type Options = {
  pathParams: show_outcomePathParameters;
} & (
  | {
      searchParams?: Partial<show_outcomeSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: show_outcomeSearchParameters;
      strict: true;
    }
);

/**
 * Show an outcome
 *
 * Returns the details of the outcome with the given id.
 *
 * Nickname: show_outcome
 */
export async function show_outcome(options: Options) {
  return await client().fetchAs<Outcome>(`/api/v1/outcomes/{id}`, {
    method: 'GET',
    ...options
  });
}
