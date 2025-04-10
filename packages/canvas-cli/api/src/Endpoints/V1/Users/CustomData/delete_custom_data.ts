import { client } from '../../../../Client.js';

export type delete_custom_dataPathParameters = {
  /** ID */
  user_id: string;
};

export type delete_custom_dataSearchParameters = {
  /**
   * The namespace from which to delete the data. This should be something
   * other Canvas API apps aren't likely to use, such as a reverse DNS for
   * your organization.
   */
  ns: string;
};

type Options = {
  pathParams: delete_custom_dataPathParameters;
} & (
  | {
      searchParams?: Partial<delete_custom_dataSearchParameters>;
      strict?: false;
    }
  | {
      searchParams?: delete_custom_dataSearchParameters;
      strict: true;
    }
);

/**
 * Delete custom data
 *
 * Delete custom user data.
 *
 * Arbitrary JSON data can be stored for a User. This API call deletes that data
 * for a given scope. Without a scope, all custom_data is deleted. See
 * {api:UsersController#set_custom_data Store Custom Data} for details and
 * examples of storage and retrieval.
 *
 * As an example, we'll store some data, then delete a subset of it.
 *
 * Example {api:UsersController#set_custom_data PUT} with valid JSON data: curl
 * 'https://<canvas>/api/v1/users/<user_id>/custom_data'\
 * -X PUT\
 * -F 'ns=com.my-organization.canvas-app'\
 * -F 'data[fruit][apple]=so tasty'\
 * -F 'data[fruit][kiwi]=a bit sour'\
 * -F 'data[veggies][root][onion]=tear-jerking'\
 * -H 'Authorization: Bearer <token>'
 *
 * Response: !!!javascript { "data": { "fruit": { "apple": "so tasty", "kiwi":
 * "a bit sour" }, "veggies": { "root": { "onion": "tear-jerking" } } } }
 *
 * Example DELETE: curl
 * 'https://<canvas>/api/v1/users/<user_id>/custom_data/fruit/kiwi'\
 * -X DELETE\
 * -F 'ns=com.my-organization.canvas-app'\
 * -H 'Authorization: Bearer <token>'
 *
 * Response: !!!javascript { "data": "a bit sour" }
 *
 * Example {api:UsersController#get_custom_data GET} following the above DELETE:
 * curl 'https://<canvas>/api/v1/users/<user_id>/custom_data'\
 * -X GET\
 * -F 'ns=com.my-organization.canvas-app'\
 * -H 'Authorization: Bearer <token>'
 *
 * Response: !!!javascript { "data": { "fruit": { "apple": "so tasty" },
 * "veggies": { "root": { "onion": "tear-jerking" } } } }
 *
 * Note that hashes left empty after a DELETE will get removed from the
 * custom_data store. For example, following the previous commands, if we delete
 * /custom_data/veggies/root/onion, then the entire /custom_data/veggies scope
 * will be removed.
 *
 * Example DELETE that empties a parent scope: curl
 * 'https://<canvas>/api/v1/users/<user_id>/custom_data/veggies/root/onion'\
 * -X DELETE\
 * -F 'ns=com.my-organization.canvas-app'\
 * -H 'Authorization: Bearer <token>'
 *
 * Response: !!!javascript { "data": "tear-jerking" }
 *
 * Example {api:UsersController#get_custom_data GET} following the above DELETE:
 * curl 'https://<canvas>/api/v1/users/<user_id>/custom_data'\
 * -X GET\
 * -F 'ns=com.my-organization.canvas-app'\
 * -H 'Authorization: Bearer <token>'
 *
 * Response: !!!javascript { "data": { "fruit": { "apple": "so tasty" } } }
 *
 * On success, this endpoint returns an object containing the data that was
 * deleted.
 *
 * Responds with status code 400 if the namespace parameter, +ns+, is missing or
 * invalid, or if the specified scope does not contain any data.
 *
 * Nickname: delete_custom_data
 */
export async function delete_custom_data({
  pathParams,
  searchParams
}: Options) {
  return await client().fetchAs<void>(`/v1/users/{user_id}/custom_data`, {
    method: 'DELETE',
    pathParams,
    searchParams
  });
}
