import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { OutcomeLink } from '../../../../../Resources/OutcomeGroups.js';

export type unlink_outcome_globalPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  outcome_id: string | number;
};

export type unlink_outcome_globalSearchParameters = Masquerade;

type Options = (
  | {
      path: unlink_outcome_globalPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: unlink_outcome_globalPathParameters;
    }
) &
  (
    | {
        query?: Partial<unlink_outcome_globalSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<unlink_outcome_globalSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: unlink_outcome_globalSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: unlink_outcome_globalSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Unlink an outcome
 *
 * Unlinking an outcome only deletes the outcome itself if this was the last
 * link to the outcome in any group in any context. Aligned outcomes cannot be
 * deleted; as such, if this is the last link to an aligned outcome, the
 * unlinking will fail.
 *
 * Nickname: unlink_outcome_global
 */
export async function unlink_outcome_global(options: Options) {
  const response = await client().fetchAs<OutcomeLink>(
    `/api/v1/global/outcome_groups/{id}/outcomes/{outcome_id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
