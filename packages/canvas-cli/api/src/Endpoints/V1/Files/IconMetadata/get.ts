import { client } from '../../../../Client.js';

export type getPathParameters = {
  /** ID */
  id: string;
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Get icon metadata
 *
 * Returns the icon maker file attachment metadata
 *
 * Nickname: get_icon_metadata
 */
export async function get(options: Options) {
  return await client().fetchAs<void>(`/api/v1/files/{id}/icon_metadata`, {
    method: 'GET',
    ...options
  });
}
