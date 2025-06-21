import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../../../Client.js';

export type mark_document_annotations_as_read_sectionsPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  section_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  assignment_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
};

export type mark_document_annotations_as_read_sectionsSearchParameters =
  Masquerade;

type Options = {
  pathParams: mark_document_annotations_as_read_sectionsPathParameters;
} & (
  | {
      searchParams?: Partial<mark_document_annotations_as_read_sectionsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: mark_document_annotations_as_read_sectionsSearchParameters;
      strict: true;
    }
);

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
export async function mark_document_annotations_as_read_sections(
  options: Options
) {
  const response = await client().fetchAs<void>(
    `/api/v1/sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/document_annotations/read`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
