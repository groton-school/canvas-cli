import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type delete_conversationPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  id: string | number;
};

export type delete_conversationSearchParameters = Masquerade;

type Options = (
  | {
      path: delete_conversationPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_conversationPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_conversationSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<delete_conversationSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: delete_conversationSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: delete_conversationSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Delete a conversation
 *
 * Delete this conversation and its messages. Note that this only deletes
this user's view of the conversation.

Response includes same fields as UPDATE action
 *
 * nickname: delete_conversation
 *
 * 
 *
 * 
 */
export async function delete_conversation(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/conversations/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
