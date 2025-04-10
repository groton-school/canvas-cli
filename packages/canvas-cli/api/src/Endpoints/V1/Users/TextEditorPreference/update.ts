import { client } from '../../../../Client.js';

export type updatePathParameters = {
  /** ID */
  id: string;
};

export type updateFormParameters = {
  /** The identifier for the editor. */
  text_editor_preference: string;
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      params?: updateFormParameters;
      strict: true;
    }
);

/**
 * Update text editor preference
 *
 * Updates a user's default choice for text editor. This allows the Choose an
 * Editor propmts to preload the user's preference.
 *
 * Nickname: update_text_editor_preference
 */
export async function update({ pathParams, params }: Options) {
  return await client().fetchAs<void>(`/v1/users/{id}/text_editor_preference`, {
    method: 'PUT',
    pathParams,
    params
  });
}
