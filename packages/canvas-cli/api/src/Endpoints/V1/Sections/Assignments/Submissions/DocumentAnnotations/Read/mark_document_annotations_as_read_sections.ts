import { client } from '../../../../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Mark document annotations as read
 *
 * Indicate that annotations made on a submitted document have been read by the
 * student. Only the student who owns the submission can use this endpoint.
 *
 * NOTE: Document annotations will be marked as read automatically when they are
 * viewed in Canvas web.
 *
 * Nickname: mark_document_annotations_as_read_sections
 */
export async function mark_document_annotations_as_read_sections({
  parameters
}: Options) {
  return await client().fetchAs<void>(
    `/v1/sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/document_annotations/read`,
    { method: 'PUT', params: parameters }
  );
}
