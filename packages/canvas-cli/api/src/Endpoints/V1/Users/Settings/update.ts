import { client } from '../../../../Client.js';

export type updatePathParameters = {
  /** ID */
  id: string;
};

export type updateSearchParameters = {
  /**
   * If true, require user to manually mark discussion posts as read (don't
   * auto-mark as read).
   */
  manual_mark_as_read: boolean;
  /** If true, hide the badge for new release notes. */
  release_notes_badge_disabled: boolean;
  /** If true, the user's page loads with the global navigation collapsed */
  collapse_global_nav: boolean;
  /**
   * If true, the user's course pages will load with the course navigation
   * collapsed.
   */
  collapse_course_nav: boolean;
  /**
   * If true, images on course cards will be presented without being tinted to
   * match the course color.
   */
  hide_dashcard_color_overlays: boolean;
  /** If true, suggestions within the comment library will be shown. */
  comment_library_suggestions_enabled: boolean;
  /**
   * If true, will display the user's preferred class Canvas dashboard view
   * instead of the canvas for elementary view.
   */
  elementary_dashboard_disabled: boolean;
};

type Options = {
  pathParams: updatePathParameters;
  searchParams?: updateSearchParameters;
};

/**
 * Update user settings.
 *
 * Update an existing user's settings.
 *
 * Nickname: update_user_settings
 */
export async function update({ pathParams, searchParams }: Options) {
  return await client().fetchAs<void>(`/v1/users/{id}/settings`, {
    method: 'GET',
    pathParams,
    searchParams
  });
}
