import { ContentExport } from '../../../../Resources/ContentExports.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List content exports
 *
 * A paginated list of the past and pending content export jobs for a course,
 * group, or user. Exports are returned newest first.
 *
 * Nickname: list_content_exports_users
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/users/{user_id}/content_exports`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
