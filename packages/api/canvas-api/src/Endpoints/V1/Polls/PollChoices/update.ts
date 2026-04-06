import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  poll_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
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
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<updateSearchParameters>;
        body?: Partial<updateFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<updateFormParameters>;
        strict?: false;
      }
    | {
        query?: Partial<updateSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: updateSearchParameters;
        body?: Partial<updateFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params: updateFormParameters;
        strict: true;
      }
  );

/**
 * Update a single poll choice
 *
 * Update an existing poll choice for this poll
 *
 * Nickname: update_single_poll_choice
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
