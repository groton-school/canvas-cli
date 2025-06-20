import { client } from '../../../../Client.js';

export type updatePathParameters = {
  /** ID */
  id: string;
};

export type updateFormParameters = {
  /** The identifier for the files UI version. */
  files_ui_version: string;
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      params: updateFormParameters;
      strict: true;
    }
);

/**
 * Update files UI version preference
 *
 * Updates a user's default choice for files UI version. This allows the files
 * UI to preload the user's preference.
 *
 * Nickname: update_files_ui_version_preference
 */
export async function update(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/users/{id}/files_ui_version_preference`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
