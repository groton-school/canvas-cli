import { client } from '../../../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Publish provisional grades for an assignment
 *
 * Publish the selected provisional grade for all submissions to an assignment.
 * Use the "Select provisional grade" endpoint to choose which provisional grade
 * to publish for a particular submission.
 *
 * Students not in the moderation set will have their one and only provisional
 * grade published.
 *
 * WARNING: This is irreversible. This will overwrite existing grades in the
 * gradebook.
 *
 * Nickname: publish_provisional_grades_for_assignment
 */
export async function publish_provisional_grades_for_assignment({
  parameters
}: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/assignments/{assignment_id}/provisional_grades/publish`,
    { method: 'POST', params: parameters }
  );
}
