import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type moderate_all_eportfolios_for_userPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
};

export type moderate_all_eportfolios_for_userSearchParameters = Masquerade;

export type moderate_all_eportfolios_for_userFormParameters = Masquerade & {
  /** The spam status for all the ePortfolios */
  spam_status: string;
};

type Options = (
  | {
      path: moderate_all_eportfolios_for_userPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: moderate_all_eportfolios_for_userPathParameters;
    }
) &
  (
    | {
        query?: Partial<moderate_all_eportfolios_for_userSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<moderate_all_eportfolios_for_userSearchParameters>;
        body?: Partial<moderate_all_eportfolios_for_userFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<moderate_all_eportfolios_for_userFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: moderate_all_eportfolios_for_userSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: moderate_all_eportfolios_for_userSearchParameters;
          }
      ) &
        (
          | {
              body: moderate_all_eportfolios_for_userFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: moderate_all_eportfolios_for_userFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Moderate all ePortfolios for a User
 *
 * Update the spam_status for all active eportfolios of a user. Only available
 * to admins who can moderate_user_content.
 *
 * Nickname: moderate_all_eportfolios_for_user
 */
export async function moderate_all_eportfolios_for_user(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/users/{user_id}/eportfolios`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
