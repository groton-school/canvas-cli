import { client } from '../../../../Client.js';

export type updatePathParameters = {
  /** ID */
  id: string;
  /** ID */
  asset_string: string;
};

export type updateFormParameters = {
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
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
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
  return await client().fetchAs<void>(
    `/api/v1/users/{id}/colors/{asset_string}`,
    {
      method: 'PUT',
      ...options
    }
  );
}
