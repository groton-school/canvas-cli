import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../Client.js';
import { Progress } from '../../../Resources/CoursePace.js';

export type batchUpdateSearchParameters = Masquerade;

export type batchUpdateFormParameters = Masquerade & {
  /** List of conversations to update. Limited to 500 conversations. */
  conversation_ids: string[];
  /** The action to take on each conversation. */
  event: string;
};

type Options =
  | {
      searchParams?: Partial<batchUpdateSearchParameters>;
      params?: Partial<batchUpdateFormParameters>;
      strict?: false;
    }
  | {
      searchParams: batchUpdateSearchParameters;
      params: batchUpdateFormParameters;
      strict: true;
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
export async function batchUpdate(options: Options) {
  const response = await client().fetchAs<Progress>(`/api/v1/conversations`, {
    method: 'PUT',
    ...options
  });
  return response;
}
