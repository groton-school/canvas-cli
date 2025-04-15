import { client } from '../../../../Client.js';

type Options =
  | {
      strict?: false;
    }
  | {
      strict: true;
    };

/**
 * Mark all as read
 *
 * Mark all conversations as read.
 *
 * Nickname: mark_all_as_read
 */
export async function mark_all_as_read(options: Options) {
  return await client().fetchAs<void>(
    `/api/v1/conversations/mark_all_as_read`,
    {
      method: 'POST',
      ...options
    }
  );
}
