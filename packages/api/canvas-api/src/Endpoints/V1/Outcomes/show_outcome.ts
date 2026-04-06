import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { Outcome } from '../../../Resources/Outcomes.js';

export type show_outcomePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type show_outcomeSearchParameters = Masquerade &
  Partial<{
    /**
     * If defaults are requested, then color and mastery level defaults will be
     * added to outcome ratings in the result. This will only take effect if the
     * Account Level Mastery Scales FF is DISABLED
     *
     * Type: boolean
     */
    add_defaults: boolean | string;
  }>;

type Options = (
  | {
      path: show_outcomePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: show_outcomePathParameters;
    }
) &
  (
    | {
        query?: Partial<show_outcomeSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<show_outcomeSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<show_outcomeSearchParameters>;
        /** @deprecated Use {Options.query} */
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
  const response = await client().fetchAs<Outcome>(`/api/v1/outcomes/{id}`, {
    method: 'GET',
    ...options
  });
  return response;
}
