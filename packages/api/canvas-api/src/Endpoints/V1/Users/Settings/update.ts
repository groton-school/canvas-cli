import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type updateSearchParameters = Masquerade &
  Partial<{
    /**
     * If true, require user to manually mark discussion posts as read (don't
     * auto-mark as read).
     *
     * Type: boolean
     */
    manual_mark_as_read: boolean | string;
    /**
     * If true, hide the badge for new release notes.
     *
     * Type: boolean
     */
    release_notes_badge_disabled: boolean | string;
    /**
     * If true, the user's page loads with the global navigation collapsed
     *
     * Type: boolean
     */
    collapse_global_nav: boolean | string;
    /**
     * If true, the user's course pages will load with the course navigation
     * collapsed.
     *
     * Type: boolean
     */
    collapse_course_nav: boolean | string;
    /**
     * If true, images on course cards will be presented without being tinted to
     * match the course color.
     *
     * Type: boolean
     */
    hide_dashcard_color_overlays: boolean | string;
    /**
     * If true, suggestions within the comment library will be shown.
     *
     * Type: boolean
     */
    comment_library_suggestions_enabled: boolean | string;
    /**
     * If true, will display the user's preferred class Canvas dashboard view
     * instead of the canvas for elementary view.
     *
     * Type: boolean
     */
    elementary_dashboard_disabled: boolean | string;
  }>;

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      searchParams?: Partial<updateSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: updateSearchParameters;
      strict: true;
    }
);

/**
 * Update user settings.
 *
 * Update an existing user's settings.
 *
 * Nickname: update_user_settings
 */
export async function update(options: Options) {
  const response = await client().fetchAs<void>(`/api/v1/users/{id}/settings`, {
    method: 'GET',
    ...options
  });
  return response;
}
