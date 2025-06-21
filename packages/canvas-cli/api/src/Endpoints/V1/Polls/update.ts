import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../Client.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /** The title of the poll. */
  'polls[question]': string[];
  /** A brief description or instructions for the poll. */
  'polls[description]': string[];
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      searchParams?: Partial<updateSearchParameters>;
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      searchParams: updateSearchParameters;
      params: updateFormParameters;
      strict: true;
    }
);

/**
 * Update a single poll
 *
 * Update an existing poll belonging to the current user
 *
 * Nickname: update_single_poll
 */
export async function update(options: Options) {
  const response = await client().fetchAs<void>(`/api/v1/polls/{id}`, {
    method: 'PUT',
    ...options
  });
  return response;
}
