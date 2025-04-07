type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get asset id mapping
 *
 * Given a complete course copy or blueprint import content migration, return a
 * mapping of asset ids from the source course to the destination course that
 * were copied in this migration or an earlier one with the same course pair and
 * migration_type (course copy or blueprint).
 *
 * The returned object's keys are asset types as they appear in API URLs
 * (+announcements+, +assignments+, +discussion_topics+, +files+,
 * +module_items+, +modules+, +pages+, and +quizzes+). The values are a mapping
 * from id in source course to id in destination course for objects of this
 * type.
 *
 * Nickname: get_asset_id_mapping
 */
export async function get({ parameters }: Options): Promise<void> {
  return await (
    await fetch(
      `/v1/courses/{course_id}/content_migrations/{id}/asset_id_mapping`,
      { method: 'GET', body: parameters }
    )
  ).json();
}
