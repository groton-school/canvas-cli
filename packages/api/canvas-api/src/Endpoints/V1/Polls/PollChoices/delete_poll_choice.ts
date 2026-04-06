import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type delete_poll_choicePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  poll_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type delete_poll_choiceSearchParameters = Masquerade;

type Options = (
  | {
      path: delete_poll_choicePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_poll_choicePathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_poll_choiceSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<delete_poll_choiceSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<delete_poll_choiceSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: delete_poll_choiceSearchParameters;
        strict: true;
      }
  );

/**
 * Delete a poll choice
 *
 * <b>204 No Content</b> response code is returned if the deletion was
 * successful.
 *
 * Nickname: delete_poll_choice
 */
export async function delete_poll_choice(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/polls/{poll_id}/poll_choices/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
