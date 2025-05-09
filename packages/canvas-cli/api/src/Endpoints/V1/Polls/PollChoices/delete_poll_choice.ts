import { client } from '../../../../Client.js';

export type delete_poll_choicePathParameters = {
  /** ID */
  poll_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_poll_choicePathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
  return await client().fetchAs<void>(
    `/api/v1/polls/{poll_id}/poll_choices/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
}
