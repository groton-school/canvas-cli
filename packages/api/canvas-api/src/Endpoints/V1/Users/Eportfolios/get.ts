import { client, Masquerade, Paginated } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { ePortfolio } from '../../../../Resources/EPortfolios.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
};

export type getSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * Deleted:: Include deleted ePortfolios. Only available to admins who can
     * moderate_user_content.
     */
    include: string[];
  }>;

type Options = (
  | {
      path: getPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: getPathParameters;
    }
) &
  (
    | {
        query?: Partial<getSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<getSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: getSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: getSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Get all ePortfolios for a User
 *
 * Get a list of all ePortfolios for the specified user.
 *
 * Nickname: get_all_eportfolios_for_user
 */
export async function get(options: Options) {
  const response = await client().fetchAs<ePortfolio[]>(
    `/api/v1/users/{user_id}/eportfolios`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
