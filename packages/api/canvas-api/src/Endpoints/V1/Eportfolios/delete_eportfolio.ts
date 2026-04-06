import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { ePortfolio } from '../../../Resources/EPortfolios.js';

export type delete_eportfolioPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type delete_eportfolioSearchParameters = Masquerade;

type Options = (
  | {
      path: delete_eportfolioPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_eportfolioPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_eportfolioSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<delete_eportfolioSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: delete_eportfolioSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: delete_eportfolioSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Delete an ePortfolio
 *
 * Mark an ePortfolio as deleted.
 *
 * Nickname: delete_eportfolio
 */
export async function delete_eportfolio(options: Options) {
  const response = await client().fetchAs<ePortfolio>(
    `/api/v1/eportfolios/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
