import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { Folder } from '../../../../Resources/Files.js';

export type createPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /** The name of the folder */
  name: string;
  /**
   * The id of the folder to store the new folder in. An error will be
   * returned if this does not correspond to an existing folder. If this and
   * parent_folder_path are sent an error will be returned. If neither is
   * given, a default folder will be used.
   */
  parent_folder_id: string;
  /**
   * The path of the folder to store the new folder in. The path separator is
   * the forward slash `/`, never a back slash. The parent folder will be
   * created if it does not already exist. This parameter only applies to new
   * folders in a context that has folders, such as a user, a course, or a
   * group. If this and parent_folder_id are sent an error will be returned.
   * If neither is given, a default folder will be used.
   */
  parent_folder_path: string;
  /**
   * The datetime to lock the folder at
   *
   * Format: date-time
   */
  lock_at: string;
  /**
   * The datetime to unlock the folder at
   *
   * Format: date-time
   */
  unlock_at: string;
  /**
   * Flag the folder as locked
   *
   * Type: boolean
   */
  locked: boolean | string;
  /**
   * Flag the folder as hidden
   *
   * Type: boolean
   */
  hidden: boolean | string;
  /**
   * Set an explicit sort position for the folder
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  position: number | string;
};

type Options = {
  pathParams: createPathParameters;
} & (
  | {
      searchParams?: Partial<createSearchParameters>;
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      searchParams: createSearchParameters;
      params: createFormParameters;
      strict: true;
    }
);

/**
 * Create folder
 *
 * Creates a folder in the specified context
 *
 * Nickname: create_folder_courses
 */
export async function create(options: Options) {
  const response = await client().fetchAs<Folder>(
    `/api/v1/courses/{course_id}/folders`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
