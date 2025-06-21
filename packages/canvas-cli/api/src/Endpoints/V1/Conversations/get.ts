import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../Client.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type getSearchParameters = Masquerade &
  Partial<{
    /**
     * (Obsolete) Submissions are no longer linked to conversations. This
     * parameter is ignored.
     *
     * Type: boolean
     */
    interleave_submissions: boolean | string;
    /**
     * Used when generating "visible" in the API response. See the explanation
     * under the {api:ConversationsController#index index API action}
     */
    scope: string;
    /**
     * Used when generating "visible" in the API response. See the explanation
     * under the {api:ConversationsController#index index API action}
     */
    filter: string[];
    /**
     * Used when generating "visible" in the API response. See the explanation
     * under the {api:ConversationsController#index index API action}
     */
    filter_mode: string;
    /**
     * Default true. If true, unread conversations will be automatically marked
     * as read. This will default to false in a future API release, so clients
     * should explicitly send true if that is the desired behavior.
     *
     * Type: boolean
     */
    auto_mark_as_read: boolean | string;
  }>;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    }
);

/**
 * Get a single conversation
 *
 * Returns information for a single conversation for the current user. Response
 * includes all fields that are present in the list/index action as well as
 * messages and extended participant information.
 *
 * Nickname: get_single_conversation
 */
export async function get(options: Options) {
  const response = await client().fetchAs<void>(`/api/v1/conversations/{id}`, {
    method: 'GET',
    ...options
  });
  return response;
}
