import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type delete_messagePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type delete_messageSearchParameters = Masquerade;

export type delete_messageFormParameters = Masquerade & {
  /** Array of message ids to be deleted */
  remove: string[];
};

type Options = (
  | {
      path: delete_messagePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_messagePathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_messageSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<delete_messageSearchParameters>;
        body?: Partial<delete_messageFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<delete_messageFormParameters>;
        strict?: false;
      }
    | {
        query?: Partial<delete_messageSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: delete_messageSearchParameters;
        body?: Partial<delete_messageFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params: delete_messageFormParameters;
        strict: true;
      }
  );

/**
 * Delete a message
 *
 * Delete messages from this conversation. Note that this only affects this
 * user's view of the conversation. If all messages are deleted, the
 * conversation will be as well (equivalent to DELETE)
 *
 * Nickname: delete_message
 */
export async function delete_message(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/conversations/{id}/remove_messages`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
