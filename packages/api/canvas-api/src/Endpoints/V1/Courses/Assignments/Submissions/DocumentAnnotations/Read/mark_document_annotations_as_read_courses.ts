import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

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

type Options = (
  | {
      path: mark_document_annotations_as_read_coursesPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: mark_document_annotations_as_read_coursesPathParameters;
    }
) &
  (
    | {
        query?: Partial<mark_document_annotations_as_read_coursesSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<mark_document_annotations_as_read_coursesSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: mark_document_annotations_as_read_coursesSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: mark_document_annotations_as_read_coursesSearchParameters;
          }
      ) & {
        strict: true;
      })
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
