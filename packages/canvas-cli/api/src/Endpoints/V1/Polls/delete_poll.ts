import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../Client.js';

export type delete_pollPathParameters = {
  /** ID */
  id: string;
};

export type delete_pollSearchParameters = Masquerade;

type Options = {
  pathParams: delete_pollPathParameters;
} & (
  | {
      searchParams?: Partial<delete_pollSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_pollSearchParameters;
      strict: true;
    }
);

/**
 * Delete a poll
 *
 * <b>204 No Content</b> response code is returned if the deletion was
 * successful.
 *
 * Nickname: delete_poll
 */
export async function delete_poll(options: Options) {
  const response = await client().fetchAs<void>(`/api/v1/polls/{id}`, {
    method: 'DELETE',
    ...options
  });
  return response;
}
