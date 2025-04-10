import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../Client.js';
import { CommMessage } from '../../../Resources/CommMessages.js';

export type listSearchParameters = {
  /** The user id for whom you want to retrieve CommMessages */
  user_id: string;
  /**
   * The beginning of the time range you want to retrieve message from. Up to
   * a year prior to the current date is available.
   *
   * Format: date-time
   */
  start_time: string;
  /**
   * The end of the time range you want to retrieve messages for. Up to a year
   * prior to the current date is available.
   *
   * Format: date-time
   */
  end_time: string;
} & Paginated;

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
 * List of CommMessages for a user
 *
 * Retrieve a paginated list of messages sent to a user.
 *
 * Nickname: list_of_commmessages_for_user
 */
export async function list({ searchParams }: Options) {
  return await client().fetchAs<CommMessage[]>(`/v1/comm_messages`, {
    method: 'GET',
    searchParams
  });
}
