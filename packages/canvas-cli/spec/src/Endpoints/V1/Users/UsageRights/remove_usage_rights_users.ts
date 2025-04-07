type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Remove usage rights
 *
 * Removes copyright and license information associated with one or more files
 *
 * Nickname: remove_usage_rights_users
 */
export async function remove_usage_rights_users({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/users/{user_id}/usage_rights`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
