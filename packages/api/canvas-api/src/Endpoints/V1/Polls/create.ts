import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /** The title of the poll. */
  'polls[question]': string[];
  /** A brief description or instructions for the poll. */
  'polls[description]': string[];
};

type Options =
  | {
      query?: Partial<createSearchParameters>;
      /** @deprecated Use {Options.query} */
      searchParams?: Partial<createSearchParameters>;
      body?: Partial<createFormParameters>;
      /** @deprecated Use {@link Options.body} */
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      query?: Partial<createSearchParameters>;
      /** @deprecated Use {Options.query} */
      searchParams: createSearchParameters;
      body?: Partial<createFormParameters>;
      /** @deprecated Use {@link Options.body} */
      params: createFormParameters;
      strict: true;
    };

/**
 * Create a single poll
 *
 * Create a new poll for the current user
 *
 * Nickname: create_single_poll
 */
export async function create(options: Options) {
  const response = await client().fetchAs<JSONValue>(`/api/v1/polls`, {
    method: 'POST',
    ...options
  });
  return response;
}
