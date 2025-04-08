import { client } from '../../../Client.js';
import { Progress } from '../../../Resources/CoursePace.js';

type Parameters = {
  /** List of conversations to update. Limited to 500 conversations. */
  conversation_ids: string[];
  /** The action to take on each conversation. */
  event: string;
};

type Options = {
  parameters: Parameters;
};

/**
 * Batch update conversations
 *
 * Perform a change on a set of conversations. Operates asynchronously; use the
 * {api:ProgressController#show progress endpoint} to query the status of an
 * operation.
 *
 * Nickname: batch_update_conversations
 */
export async function batch_update_conversations({ parameters }: Options) {
  return await client().fetchAs<Progress>(`/v1/conversations`, {
    method: 'PUT',
    params: parameters
  });
}
