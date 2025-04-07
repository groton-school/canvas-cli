type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Course activity stream
 *
 * Returns the current user's course-specific activity stream, paginated.
 *
 * For full documentation, see the API documentation for the user activity
 * stream, in the user api.
 *
 * Nickname: course_activity_stream
 */
export async function course_activity_stream({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/courses/{course_id}/activity_stream`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
