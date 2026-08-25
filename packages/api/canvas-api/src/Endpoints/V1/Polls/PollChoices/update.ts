import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type updatePathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  poll_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /**
   * The descriptive text of the poll choice.
   *
   *
   *
   *
   */
  'poll_choices[text]': string[];
  /**
   * Whether this poll choice is considered correct or not.  Defaults to false.
   *
   *
   *
   *
   */
  'poll_choices[is_correct]': boolean | string[];
  /**
     * The order this poll choice should be returned in the context it&#x27;s sibling poll choices.
     *
     * 

format: 'int64'
     *
     * 
     */
  'poll_choices[position]': number | string[];
};

type Options = (
  | {
      path: updatePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: updatePathParameters;
    }
) &
  (
    | {
        query?: Partial<updateSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<updateSearchParameters>;
        body?: Partial<updateFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<updateFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: updateSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: updateSearchParameters;
          }
      ) &
        (
          | {
              body: updateFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: updateFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Update a single poll choice
 *
 * Update an existing poll choice for this poll
 *
 * nickname: update_single_poll_choice
 *
 *
 *
 *
 */
export async function update(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/polls/{poll_id}/poll_choices/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
