import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
  /** ID */
  asset_string: string;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /**
   * The hexcode of the color to set for the context, if you choose to pass
   * the hexcode as a query parameter rather than in the request body you
   * should NOT include the '#' unless you escape it first.
   */
  hexcode: string;
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      searchParams?: Partial<updateSearchParameters>;
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      searchParams: updateSearchParameters;
      params: updateFormParameters;
      strict: true;
    }
);

/**
 * Update custom color
 *
 * Updates a custom color for a user for a given context. This allows colors for
 * the calendar and elsewhere to be customized on a user basis.
 *
 * The asset string parameter should be in the format 'context_id', for example
 * 'course_42'
 *
 * Nickname: update_custom_color
 */
export async function update(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/users/{id}/colors/{asset_string}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
