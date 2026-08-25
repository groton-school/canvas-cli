import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type updatePathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /**
   * Change the state of this conversation
   *
   *
   *
   *
   */
  'conversation[workflow_state]': string;
  /**
     * Toggle the current user&#x27;s subscription to the conversation (only valid for
group conversations). If unsubscribed, the user will still have access to
the latest messages, but the conversation won&#x27;t be automatically flagged
as unread, nor will it jump to the top of the inbox.
     *
     * type: boolean
     *
     * 
     */
  'conversation[subscribed]': boolean | string;
  /**
   * Toggle the starred state of the current user&#x27;s view of the conversation.
   *
   * type: boolean
   *
   *
   */
  'conversation[starred]': boolean | string;
  /**
     * Used when generating &quot;visible&quot; in the API response. See the explanation
under the {api:ConversationsController#index index API action}
     *
     * 
     *
     * 
     */
  scope: string;
  /**
     * Used when generating &quot;visible&quot; in the API response. See the explanation
under the {api:ConversationsController#index index API action}
     *
     * 
     *
     * 
     */
  filter: string[];
  /**
     * Used when generating &quot;visible&quot; in the API response. See the explanation
under the {api:ConversationsController#index index API action}
     *
     * 
     *
     * 
     */
  filter_mode: string;
};

type Options = (
  | {
      path: updatePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: updatePathParameters;
    }
) &
  (
    | {
        query?: Partial<updateSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<updateSearchParameters>;
        body?: Partial<updateFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<updateFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: updateSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: updateSearchParameters;
          }
      ) &
        (
          | {
              body: updateFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: updateFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Edit a conversation
 *
 * Updates attributes for a single conversation.
 *
 * nickname: edit_conversation
 *
 *
 *
 *
 */
export async function update(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/conversations/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
