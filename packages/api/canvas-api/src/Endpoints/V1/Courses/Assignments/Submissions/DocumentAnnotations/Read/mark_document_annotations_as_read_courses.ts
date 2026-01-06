import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../../../Client.js';

export type mark_document_annotations_as_read_coursesPathParameters = {
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
  assignment_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
};

export type mark_document_annotations_as_read_coursesSearchParameters =
  Masquerade;

type Options = {
  pathParams: mark_document_annotations_as_read_coursesPathParameters;
} & (
  | {
      searchParams?: Partial<mark_document_annotations_as_read_coursesSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: mark_document_annotations_as_read_coursesSearchParameters;
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
 * Nickname: mark_document_annotations_as_read_courses
 */
export async function mark_document_annotations_as_read_courses(
  options: Options
) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/document_annotations/read`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
