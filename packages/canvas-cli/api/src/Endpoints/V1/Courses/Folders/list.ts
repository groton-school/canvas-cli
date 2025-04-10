import { client } from '../../../../Client.js';
import { Folder } from '../../../../Resources/Files.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
};

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * List all folders
 *
 * Returns the paginated list of all folders for the given context. This will be
 * returned as a flat list containing all subfolders as well.
 *
 * Nickname: list_all_folders_courses
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<string[]>(`/v1/courses/{course_id}/folders`, {
    method: 'GET',
    pathParams
  });
}
