import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../Client.js';

export type delete_pollPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
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
  const response = await client().fetchAs<JSONValue>(`/api/v1/polls/{id}`, {
    method: 'DELETE',
    ...options
  });
  return response;
}
