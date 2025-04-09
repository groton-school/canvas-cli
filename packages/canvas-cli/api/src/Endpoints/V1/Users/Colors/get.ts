import { client } from '../../../../Client.js';

type getPathParameters = {
  /** ID */
  id: string;
  /** ID */
  asset_string: string;
};

type Options = {
  pathParams: getPathParameters;
};

/**
 * Get custom color
 *
 * Returns the custom colors that have been saved for a user for a given
 * context.
 *
 * The asset_string parameter should be in the format 'context_id', for example
 * 'course_42'.
 *
 * Nickname: get_custom_color
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<void>(`/v1/users/{id}/colors/{asset_string}`, {
    method: 'GET',
    pathParams
  });
}
