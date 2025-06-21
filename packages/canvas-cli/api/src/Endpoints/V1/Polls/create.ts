import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../Client.js';

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /** The title of the poll. */
  'polls[question]': string[];
  /** A brief description or instructions for the poll. */
  'polls[description]': string[];
};

type Options =
  | {
      searchParams?: Partial<createSearchParameters>;
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      searchParams: createSearchParameters;
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
  const response = await client().fetchAs<void>(`/api/v1/polls`, {
    method: 'POST',
    ...options
  });
  return response;
}
