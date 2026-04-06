import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type lock_or_unlock_current_csp_settings_for_sub_accounts_and_coursesPathParameters =
  {
    /**
     * ID
     *
     * Type: string
     */
    account_id: string | number;
  };

export type lock_or_unlock_current_csp_settings_for_sub_accounts_and_coursesSearchParameters =
  Masquerade;

export type lock_or_unlock_current_csp_settings_for_sub_accounts_and_coursesFormParameters =
  Masquerade & {
    /**
     * Whether sub-accounts and courses will be prevented from overriding
     * settings inherited from this account.
     *
     * Type: boolean
     */
    settings_locked: boolean | string;
  };

type Options = (
  | {
      path: lock_or_unlock_current_csp_settings_for_sub_accounts_and_coursesPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: lock_or_unlock_current_csp_settings_for_sub_accounts_and_coursesPathParameters;
    }
) &
  (
    | {
        query?: Partial<lock_or_unlock_current_csp_settings_for_sub_accounts_and_coursesSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<lock_or_unlock_current_csp_settings_for_sub_accounts_and_coursesSearchParameters>;
        body?: Partial<lock_or_unlock_current_csp_settings_for_sub_accounts_and_coursesFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<lock_or_unlock_current_csp_settings_for_sub_accounts_and_coursesFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: lock_or_unlock_current_csp_settings_for_sub_accounts_and_coursesSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: lock_or_unlock_current_csp_settings_for_sub_accounts_and_coursesSearchParameters;
          }
      ) &
        (
          | {
              body: lock_or_unlock_current_csp_settings_for_sub_accounts_and_coursesFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: lock_or_unlock_current_csp_settings_for_sub_accounts_and_coursesFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Lock or unlock current CSP settings for sub-accounts and courses
 *
 * Can only be set if CSP is explicitly enabled or disabled on this account
 * (i.e. "inherited" is false).
 *
 * Nickname: lock_or_unlock_current_csp_settings_for_sub_accounts_and_courses
 */
export async function lock_or_unlock_current_csp_settings_for_sub_accounts_and_courses(
  options: Options
) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/accounts/{account_id}/csp_settings/lock`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
