import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';

export type delete_poll_choicePathParameters = {
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

export type delete_poll_choiceSearchParameters = Masquerade;

type Options = {
  pathParams: delete_poll_choicePathParameters;
} & (
  | {
      searchParams?: Partial<delete_poll_choiceSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_poll_choiceSearchParameters;
      strict: true;
    }
);

/**
 * Delete a poll choice
 *
 * <b>204 No Content</b> response code is returned if the deletion was
 * successful.
 *
 * Nickname: delete_poll_choice
 */
export async function delete_poll_choice(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/polls/{poll_id}/poll_choices/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
