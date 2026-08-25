import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type updatePathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  id: string | number;
};

export type updateSearchParameters = Masquerade &
  Partial<{
    /**
     * If true, require user to manually mark discussion posts as read (don&#x27;t
auto-mark as read).
     *
     * type: boolean
     *
     * 
     */
    manual_mark_as_read: boolean | string;
    /**
     * If true, hide the badge for new release notes.
     *
     * type: boolean
     *
     *
     */
    release_notes_badge_disabled: boolean | string;
    /**
     * If true, the user&#x27;s page loads with the global navigation collapsed
     *
     * type: boolean
     *
     *
     */
    collapse_global_nav: boolean | string;
    /**
     * If true, the user&#x27;s course pages will load with the course navigation
collapsed.
     *
     * type: boolean
     *
     * 
     */
    collapse_course_nav: boolean | string;
    /**
     * If true, images on course cards will be presented without being tinted
to match the course color.
     *
     * type: boolean
     *
     * 
     */
    hide_dashcard_color_overlays: boolean | string;
    /**
     * If true, suggestions within the comment library will be shown.
     *
     * type: boolean
     *
     *
     */
    comment_library_suggestions_enabled: boolean | string;
    /**
     * If true, will display the user&#x27;s preferred class Canvas dashboard
view instead of the canvas for elementary view.
     *
     * type: boolean
     *
     * 
     */
    elementary_dashboard_disabled: boolean | string;
    /**
     * If true, enables the widget dashboard for the user. Only applies
when the widget_dashboard feature is enabled at the account level.
Defaults to true when the feature becomes available.
     *
     * type: boolean
     *
     * 
     */
    widget_dashboard_user_preference: boolean | string;
  }>;

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
      ) & {
        strict: true;
      })
  );

/**
 * Update user settings.
 *
 * Update an existing user's settings.
 *
 * nickname: update_user_settings
 *
 *
 *
 *
 */
export async function update(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/users/{id}/settings`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
