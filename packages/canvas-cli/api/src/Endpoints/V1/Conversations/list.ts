import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../Client.js';
import { Conversation } from '../../../Resources/Conversations.js';

export type listSearchParameters = Partial<{
  /**
   * When set, only return conversations of the specified type. For example,
   * set to "unread" to return only conversations that haven't been read. The
   * default behavior is to return all non-archived conversations (i.e. read
   * and unread).
   */
  scope: string;
  /**
   * When set, only return conversations for the specified courses, groups or
   * users. The id should be prefixed with its type, e.g. "user_123" or
   * "course_456". Can be an array (by setting "filter[]") or single value (by
   * setting "filter")
   */
  filter: string[];
  /**
   * When filter[] contains multiple filters, combine them with this mode,
   * filtering conversations that at have at least all of the contexts ("and")
   * or at least one of the contexts ("or")
   */
  filter_mode: string;
  /**
   * (Obsolete) Submissions are no longer linked to conversations. This
   * parameter is ignored.
   */
  interleave_submissions: boolean;
  /**
   * Default is false. If true, the top-level element of the response will be
   * an object rather than an array, and will have the keys "conversations"
   * which will contain the paged conversation data, and "conversation_ids"
   * which will contain the ids of all conversations under this scope/filter
   * in the same order.
   */
  include_all_conversation_ids: boolean;
  /**
   * "participant_avatars":: Optionally include an "avatar_url" key for each
   * user participanting in the conversation
   */
  include: string[];
}> &
  Paginated;

type Options =
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    };

/**
 * List conversations
 *
 * Returns the paginated list of conversations for the current user, most recent
 * ones first.
 *
 * Nickname: list_conversations
 */
export async function list(options: Options) {
  return await client().fetchAs<Conversation[]>(`/api/v1/conversations`, {
    method: 'GET',
    ...options
  });
}
