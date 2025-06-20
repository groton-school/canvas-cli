import { client } from '../../../Client.js';

export type updatePathParameters = {
  /** ID */
  id: string;
};

export type updateFormParameters = {
  /** Change the state of this conversation */
  'conversation[workflow_state]': string;
  /**
   * Toggle the current user's subscription to the conversation (only valid
   * for group conversations). If unsubscribed, the user will still have
   * access to the latest messages, but the conversation won't be
   * automatically flagged as unread, nor will it jump to the top of the
   * inbox.
   */
  'conversation[subscribed]': boolean;
  /** Toggle the starred state of the current user's view of the conversation. */
  'conversation[starred]': boolean;
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
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      params: updateFormParameters;
      strict: true;
    }
);

/**
 * Edit a conversation
 *
 * Updates attributes for a single conversation.
 *
 * Nickname: edit_conversation
 */
export async function update(options: Options) {
  const response = await client().fetchAs<void>(`/api/v1/conversations/{id}`, {
    method: 'PUT',
    ...options
  });
  return response;
}
