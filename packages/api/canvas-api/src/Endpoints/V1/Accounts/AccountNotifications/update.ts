import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /** The subject of the notification. */
  'account_notification[subject]': string;
  /** The message body of the notification. */
  'account_notification[message]': string;
  /**
   * The start date and time of the notification in ISO8601 format. e.g.
   * 2014-01-01T01:00Z
   *
   * Format: date-time
   */
  'account_notification[start_at]': string;
  /**
   * The end date and time of the notification in ISO8601 format. e.g.
   * 2014-01-01T01:00Z
   *
   * Format: date-time
   */
  'account_notification[end_at]': string;
  /** The icon to display with the notification. */
  'account_notification[icon]': string;
  /**
   * The role(s) to send global notification to. Note: ommitting this field
   * will send to everyone Example: account_notification_roles:
   * ["StudentEnrollment", "TeacherEnrollment"]
   */
  account_notification_roles: string[];
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
 * Update a global notification
 *
 * Update global notification for an account.
 *
 * Nickname: update_global_notification
 */
export async function update(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/accounts/{account_id}/account_notifications/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
