import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type remove_usage_rights_usersPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
};

export type remove_usage_rights_usersSearchParameters = Masquerade &
  Partial<{
    /** List of ids of files to remove associated usage rights from. */
    file_ids: string[];
    /**
     * List of ids of folders. Usage rights will be removed from all files in
     * these folders.
     */
    folder_ids: string[];
  }>;

type Options = (
  | {
      path: remove_usage_rights_usersPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: remove_usage_rights_usersPathParameters;
    }
) &
  (
    | {
        query?: Partial<remove_usage_rights_usersSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<remove_usage_rights_usersSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<remove_usage_rights_usersSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: remove_usage_rights_usersSearchParameters;
        strict: true;
      }
  );

/**
 * Remove usage rights
 *
 * Removes copyright and license information associated with one or more files
 *
 * Nickname: remove_usage_rights_users
 */
export async function remove_usage_rights_users(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/users/{user_id}/usage_rights`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
