import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { OutcomeGroup } from '../../../../../Resources/OutcomeGroups.js';

export type createPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /** The title of the new outcome group. */
  title: string;
  /** The description of the new outcome group. */
  description: string;
  /** A custom GUID for the learning standard */
  vendor_guid: string;
};

type Options = (
  | {
      path: createPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: createPathParameters;
    }
) &
  (
    | {
        query?: Partial<createSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<createSearchParameters>;
        body?: Partial<createFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<createFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: createSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: createSearchParameters;
          }
      ) &
        (
          | {
              body: createFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: createFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Create a subgroup
 *
 * Creates a new empty subgroup under the outcome group with the given title and
 * description.
 *
 * Nickname: create_subgroup_global
 */
export async function create(options: Options) {
  const response = await client().fetchAs<OutcomeGroup>(
    `/api/v1/global/outcome_groups/{id}/subgroups`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
