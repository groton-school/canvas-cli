import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type createPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  poll_id: string | number;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /** The descriptive text of the poll choice. */
  'poll_choices[text]': string[];
  /** Whether this poll choice is considered correct or not. Defaults to false. */
  'poll_choices[is_correct]': boolean | string[];
  /**
   * The order this poll choice should be returned in the context it's sibling
   * poll choices.
   *
   * Format: 'int64'
   */
  'poll_choices[position]': number | string[];
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
        /** @deprecated Use {Options.query} */
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
            /** @deprecated Use {Options.query} */
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
 * Create a single poll choice
 *
 * Create a new poll choice for this poll
 *
 * Nickname: create_single_poll_choice
 */
export async function create(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/polls/{poll_id}/poll_choices`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
