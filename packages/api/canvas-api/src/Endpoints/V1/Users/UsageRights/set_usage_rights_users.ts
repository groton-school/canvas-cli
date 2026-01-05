import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { UsageRights } from '../../../../Resources/Files.js';

export type set_usage_rights_usersPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
};

export type set_usage_rights_usersSearchParameters = Masquerade;

export type set_usage_rights_usersFormParameters = Masquerade & {
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
   *
   * Type: boolean
   */
  publish: boolean | string;
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
  pathParams: set_usage_rights_usersPathParameters;
} & (
  | {
      searchParams?: Partial<set_usage_rights_usersSearchParameters>;
      params?: Partial<set_usage_rights_usersFormParameters>;
      strict?: false;
    }
  | {
      searchParams: set_usage_rights_usersSearchParameters;
      params: set_usage_rights_usersFormParameters;
      strict: true;
    }
);

/**
 * Set usage rights
 *
 * Sets copyright and license information for one or more files
 *
 * Nickname: set_usage_rights_users
 */
export async function set_usage_rights_users(options: Options) {
  const response = await client().fetchAs<UsageRights>(
    `/api/v1/users/{user_id}/usage_rights`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
