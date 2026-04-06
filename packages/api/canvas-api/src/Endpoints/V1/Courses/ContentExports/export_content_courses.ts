import { client, Masquerade } from '#client';
import { JSONObject, JSONValue } from '@battis/typescript-tricks';
import { ContentExport } from '../../../../Resources/ContentExports.js';

export type export_content_coursesPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type export_content_coursesSearchParameters = Masquerade;

export type export_content_coursesFormParameters = Masquerade & {
  /**
   * "common_cartridge":: Export the contents of the course in the Common
   * Cartridge (.imscc) format "qti":: Export quizzes from a course in the QTI
   * format "zip":: Export files from a course, group, or user in a zip file
   */
  export_type: string;
  /**
   * Don't send the notifications about the export to the user. Default: false
   *
   * Type: boolean
   */
  skip_notifications: boolean | string;
  /**
   * The select parameter allows exporting specific data. The keys are object
   * types like 'files', 'folders', 'pages', etc. The value for each key is a
   * list of object ids. An id can be an integer or a string.
   *
   * Multiple object types can be selected in the same call. However, not all
   * object types are valid for every export_type. Common Cartridge supports
   * all object types. Zip and QTI only support the object types as described
   * below.
   *
   * "folders":: Also supported for zip export_type. "files":: Also supported
   * for zip export_type. "quizzes":: Also supported for qti export_type.
   *
   * Hash
   */
  select: JSONObject;
};

type Options = (
  | {
      path: export_content_coursesPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: export_content_coursesPathParameters;
    }
) &
  (
    | {
        query?: Partial<export_content_coursesSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<export_content_coursesSearchParameters>;
        body?: Partial<export_content_coursesFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<export_content_coursesFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: export_content_coursesSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: export_content_coursesSearchParameters;
          }
      ) &
        (
          | {
              body: export_content_coursesFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: export_content_coursesFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Export content
 *
 * Begin a content export job for a course, group, or user.
 *
 * You can use the {api:ProgressController#show Progress API} to track the
 * progress of the export. The migration's progress is linked to with the
 * _progress_url_ value.
 *
 * When the export completes, use the {api:ContentExportsApiController#show Show
 * content export} endpoint to retrieve a download URL for the exported
 * content.
 *
 * Nickname: export_content_courses
 */
export async function export_content_courses(options: Options) {
  const response = await client().fetchAs<ContentExport>(
    `/api/v1/courses/{course_id}/content_exports`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
