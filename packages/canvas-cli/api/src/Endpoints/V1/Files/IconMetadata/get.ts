import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';

export type getPathParameters = {
  /** ID */
  id: string;
};

export type getSearchParameters = Masquerade;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
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
  const response = await client().fetchAs<void>(
    `/api/v1/files/{id}/icon_metadata`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
