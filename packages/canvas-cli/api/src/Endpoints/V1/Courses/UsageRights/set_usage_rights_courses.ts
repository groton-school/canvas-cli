import { client } from '../../../../Client.js';
import { UsageRights } from '../../../../Resources/Files.js';

export type set_usage_rights_coursesPathParameters = {
  /** ID */
  course_id: string;
};

export type set_usage_rights_coursesFormParameters = {
  /** List of ids of files to set usage rights for. */
  file_ids: string[];
  /**
   * List of ids of folders to search for files to set usage rights for. Note
   * that new files uploaded to these folders do not automatically inherit
   * these rights.
   */
  folder_ids: string[];
  /**
   * Whether the file(s) or folder(s) should be published on save, provided
   * that usage rights have been specified (set to `true` to publish on
   * save).
   */
  publish: boolean;
  /** The intellectual property justification for using the files in Canvas */
  'usage_rights[use_justification]': string;
  /** The legal copyright line for the files */
  'usage_rights[legal_copyright]': string;
  /**
   * The license that applies to the files. See the
   * {api:UsageRightsController#licenses List licenses endpoint} for the
   * supported license types.
   */
  'usage_rights[license]': string;
};

type Options = {
  pathParams: set_usage_rights_coursesPathParameters;
  params?: set_usage_rights_coursesFormParameters;
};

/**
 * Set usage rights
 *
 * Sets copyright and license information for one or more files
 *
 * Nickname: set_usage_rights_courses
 */
export async function set_usage_rights_courses({
  pathParams,
  params
}: Options) {
  return await client().fetchAs<UsageRights>(
    `/v1/courses/{course_id}/usage_rights`,
    {
      method: 'PUT',
      pathParams,
      params
    }
  );
}
