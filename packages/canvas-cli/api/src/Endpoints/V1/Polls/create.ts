import { client } from '../../../Client.js';

export type createFormParameters = {
  /** The title of the poll. */
  'polls[question]': string[];
  /** A brief description or instructions for the poll. */
  'polls[description]': string[];
};

type Options = {
  params?: createFormParameters;
};

/**
 * Create a single poll
 *
 * Create a new poll for the current user
 *
 * Nickname: create_single_poll
 */
export async function create({ params }: Options) {
  return await client().fetchAs<void>(`/v1/polls`, {
    method: 'POST',
    params
  });
}
