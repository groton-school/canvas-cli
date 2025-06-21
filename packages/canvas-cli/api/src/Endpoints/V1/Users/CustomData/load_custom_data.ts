import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';

export type load_custom_dataPathParameters = {
  /** ID */
  user_id: string;
};

export type load_custom_dataSearchParameters = Masquerade &
  Partial<{
    /**
     * The namespace from which to retrieve the data. This should be something
     * other Canvas API apps aren't likely to use, such as a reverse DNS for
     * your organization.
     */
    ns: string;
  }>;

type Options = {
  pathParams: load_custom_dataPathParameters;
} & (
  | {
      searchParams?: Partial<load_custom_dataSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: load_custom_dataSearchParameters;
      strict: true;
    }
);

/**
 * Load custom data
 *
 * Load custom user data.
 *
 * Arbitrary JSON data can be stored for a User. This API call retrieves that
 * data for a (optional) given scope. See {api:UsersController#set_custom_data
 * Store Custom Data} for details and examples.
 *
 * On success, this endpoint returns an object containing the data that was
 * requested.
 *
 * Responds with status code 400 if the namespace parameter, +ns+, is missing or
 * invalid, or if the specified scope does not contain any data.
 *
 * Nickname: load_custom_data
 */
export async function load_custom_data(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/users/{user_id}/custom_data`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
