import { BlueprintMigration } from '../../../../../Resources/BlueprintCourses.js';

type Parameters = {
  /** An optional comment to be included in the sync history. */
  comment: string;
  /** Send a notification to the calling user when the sync completes. */
  send_notification: boolean;
  /**
   * Whether course settings should be copied over to associated courses.
   * Defaults to true for newly associated courses.
   */
  copy_settings: boolean;
  /**
   * By default, new-item notifications are suppressed in blueprint syncs. If
   * this option is set, teachers and students may receive notifications for
   * items such as announcements and assignments that are created in
   * associated courses (subject to the usual notification settings). This
   * option requires the Blueprint Item Notifications feature to be enabled.
   */
  send_item_notifications: boolean;
  /**
   * If set, newly associated courses will be automatically published after
   * the sync completes
   */
  publish_after_initial_sync: boolean;
};

type Options = {
  parameters: Parameters;
};

/**
 * Begin a migration to push to associated courses
 *
 * Begins a migration to push recently updated content to all associated
 * courses. Only one migration can be running at a time.
 *
 * Nickname: begin_migration_to_push_to_associated_courses
 */
export async function begin_migration_to_push_to_associated_courses({
  parameters
}: Options): Promise<BlueprintMigration> {
  return await (
    await fetch(
      `/v1/courses/{course_id}/blueprint_templates/{template_id}/migrations`,
      { method: 'POST', body: parameters }
    )
  ).json();
}
