import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type updateSearchParameters = Masquerade;

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
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<updateSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: updateSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: updateSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Update a Webhook Subscription
 *
 * This endpoint uses the same parameters as the create endpoint
 *
 * Nickname: update_webhook_subscription
 */
export async function update(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/lti/subscriptions/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
