import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { BlueprintMigration } from '../../../../../Resources/BlueprintCourses.js';

export type begin_migration_to_push_to_associated_coursesPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  template_id: string | number;
};

export type begin_migration_to_push_to_associated_coursesSearchParameters =
  Masquerade;

export type begin_migration_to_push_to_associated_coursesFormParameters =
  Masquerade & {
    /** An optional comment to be included in the sync history. */
    comment: string;
    /**
     * Send a notification to the calling user when the sync completes.
     *
     * Type: boolean
     */
    send_notification: boolean | string;
    /**
     * Whether course settings should be copied over to associated courses.
     * Defaults to true for newly associated courses.
     *
     * Type: boolean
     */
    copy_settings: boolean | string;
    /**
     * By default, new-item notifications are suppressed in blueprint syncs. If
     * this option is set, teachers and students may receive notifications for
     * items such as announcements and assignments that are created in
     * associated courses (subject to the usual notification settings). This
     * option requires the Blueprint Item Notifications feature to be enabled.
     *
     * Type: boolean
     */
    send_item_notifications: boolean | string;
    /**
     * If set, newly associated courses will be automatically published after
     * the sync completes
     *
     * Type: boolean
     */
    publish_after_initial_sync: boolean | string;
  };

type Options = {
  pathParams: begin_migration_to_push_to_associated_coursesPathParameters;
} & (
  | {
      searchParams?: Partial<begin_migration_to_push_to_associated_coursesSearchParameters>;
      params?: Partial<begin_migration_to_push_to_associated_coursesFormParameters>;
      strict?: false;
    }
  | {
      searchParams: begin_migration_to_push_to_associated_coursesSearchParameters;
      params: begin_migration_to_push_to_associated_coursesFormParameters;
      strict: true;
    }
);

/**
 * Begin a migration to push to associated courses
 *
 * Begins a migration to push recently updated content to all associated
 * courses. Only one migration can be running at a time.
 *
 * Nickname: begin_migration_to_push_to_associated_courses
 */
export async function begin_migration_to_push_to_associated_courses(
  options: Options
) {
  const response = await client().fetchAs<BlueprintMigration>(
    `/api/v1/courses/{course_id}/blueprint_templates/{template_id}/migrations`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
