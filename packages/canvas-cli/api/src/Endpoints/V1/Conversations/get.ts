import { client } from '../../../Client.js';

export type getPathParameters = {
  /** ID */
  id: string;
};

export type getSearchParameters = {
  /**
   * (Obsolete) Submissions are no longer linked to conversations. This
   * parameter is ignored.
   */
  interleave_submissions: boolean;
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
   */
  auto_mark_as_read: boolean;
};

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
export async function get({ pathParams, searchParams }: Options) {
  return await client().fetchAs<void>(`/v1/conversations/{id}`, {
    method: 'GET',
    pathParams,
    searchParams
  });
}
