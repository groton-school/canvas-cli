import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../Client.js';
import { CommMessage } from '../../../Resources/CommMessages.js';

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
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
  }>;

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
export async function list(options: Options) {
  const response = await client().fetchAs<CommMessage[]>(
    `/api/v1/comm_messages`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
