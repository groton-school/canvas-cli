import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade, Paginated } from '#client';
import { Feature } from '../../../../Resources/FeatureFlags.js';

export type listPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  user_id: string | number;
};

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * When true, feature flags that are enabled in a higher context and cannot
be overridden will be omitted.
     *
     * type: boolean
     *
     * 
     */
    hide_inherited_enabled: boolean | string;
  }>;

type Options = (
  | {
      path: listPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: listPathParameters;
    }
) &
  (
    | {
        query?: Partial<listSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<listSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: listSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: listSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * List features
 *
 * A paginated list of all features that apply to a given Account, Course, or User.
 *
 * nickname: list_features_users
 *
 *
 *
 *
 */
export async function list(options: Options) {
  const response = await client().fetchAs<Feature[]>(
    `/api/v1/users/{user_id}/features`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
