import { Folder } from '../../../../../Resources/Files.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Resolve path
 *
 * Given the full path to a folder, returns a list of all Folders in the path
 * hierarchy, starting at the root folder, and ending at the requested folder.
 * The given path is relative to the context's root folder and does not include
 * the root folder's name (e.g., "course files"). If an empty path is given, the
 * context's root folder alone is returned. Otherwise, if no folder exists with
 * the given full path, a Not Found error is returned.
 *
 * Nickname: resolve_path_courses
 */
export async function resolve_path_courses({
  parameters
}: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/courses/{course_id}/folders/by_path`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
