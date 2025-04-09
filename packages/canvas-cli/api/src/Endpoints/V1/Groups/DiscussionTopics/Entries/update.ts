import { client } from '../../../../../Client.js';

type updatePathParameters = {
  /** ID */
  group_id: string;
  /** ID */
  topic_id: string;
  /** ID */
  id: string;
};

type updateFormParameters = {
  /** The updated body of the entry. */
  message: string;
};

type Options = {
  pathParams: updatePathParameters;
  params?: updateFormParameters;
};

/**
 * Update an entry
 *
 * Update an existing discussion entry.
 *
 * The entry must have been created by the current user, or the current user
 * must have admin rights to the discussion. If the edit is not allowed, a 401
 * will be returned.
 *
 * Nickname: update_entry_groups
 */
export async function update({ pathParams, params }: Options) {
  return await client().fetchAs<void>(
    `/v1/groups/{group_id}/discussion_topics/{topic_id}/entries/{id}`,
    {
      method: 'PUT',
      pathParams,
      params
    }
  );
}
