import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { User } from '../../../Resources/Users.js';

export type show_user_detailsPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  id: string | number;
};

export type show_user_detailsSearchParameters = Masquerade &
  Partial<{
    /**
     * Array of additional information to include on the user record.
&quot;locale&quot;, &quot;avatar_url&quot;, &quot;permissions&quot;, &quot;email&quot;, and &quot;effective_locale&quot;
will always be returned
     *
     * 
     *
     * 
     */
    include: string[];
  }>;

type Options = (
  | {
      path: show_user_detailsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: show_user_detailsPathParameters;
    }
) &
  (
    | {
        query?: Partial<show_user_detailsSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<show_user_detailsSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: show_user_detailsSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: show_user_detailsSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Show user details
 *
 * Shows details for user.

Also includes an attribute "permissions", a non-comprehensive list of permissions for the user.
Example:
  !!!javascript
  "permissions": {
   "can_update_name": true, // Whether the user can update their name.
   "can_update_avatar": false, // Whether the user can update their avatar.
   "limit_parent_app_web_access": false // Whether the user can interact with Canvas web from the Canvas Parent app.
  }
 *
 * nickname: show_user_details
 *
 * 
 *
 * 
 */
export async function show_user_details(options: Options) {
  const response = await client().fetchAs<User>(`/api/v1/users/{id}`, {
    method: 'GET',
    ...options
  });
  return response;
}
