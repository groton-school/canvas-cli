type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Remove quiz migration alert
 *
 * Remove alert about the limitations of quiz migrations that is displayed to a
 * user in a course
 *
 * You must be logged in to use this endpoint
 *
 * Nickname: remove_quiz_migration_alert
 */
export async function remove_quiz_migration_alert({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/courses/{id}/dismiss_migration_limitation_message`, {
      method: 'POST',
      body: parameters
    })
  ).json();
}
