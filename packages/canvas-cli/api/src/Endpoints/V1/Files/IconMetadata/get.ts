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
export async function get({ pathParams }: Options) {
  return await client().fetchAs<void>(`/v1/files/{id}/icon_metadata`, {
    method: 'GET',
    pathParams
  });
}
