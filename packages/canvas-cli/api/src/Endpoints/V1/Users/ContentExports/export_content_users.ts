import { JSONObject } from '@battis/typescript-tricks';
import { client } from '../../../../Client.js';
import { ContentExport } from '../../../../Resources/ContentExports.js';

export type export_content_usersPathParameters = {
  /** ID */
  user_id: string;
};

export type export_content_usersFormParameters = {
  /**
   * "common_cartridge":: Export the contents of the course in the Common
   * Cartridge (.imscc) format "qti":: Export quizzes from a course in the QTI
   * format "zip":: Export files from a course, group, or user in a zip file
   */
  export_type: string;
  /** Don't send the notifications about the export to the user. Default: false */
  skip_notifications: boolean;
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

type Options = {
  pathParams: export_content_usersPathParameters;
} & (
  | {
      params?: Partial<export_content_usersFormParameters>;
      strict?: false;
    }
  | {
      params?: export_content_usersFormParameters;
      strict: true;
    }
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
 * Nickname: export_content_users
 */
export async function export_content_users({ pathParams, params }: Options) {
  return await client().fetchAs<ContentExport>(
    `/v1/users/{user_id}/content_exports`,
    {
      method: 'POST',
      pathParams,
      params
    }
  );
}
