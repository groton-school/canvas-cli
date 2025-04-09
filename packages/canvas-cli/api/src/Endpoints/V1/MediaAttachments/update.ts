import { client } from '../../../Client.js';

type updatePathParameters = {
  /** ID */
  attachment_id: string;
};

type updateFormParameters = {
  /** The new title. */
  user_entered_title: string;
};

type Options = {
  pathParams: updatePathParameters;
  params?: updateFormParameters;
};

/**
 * Update Media Object
 *
 * Nickname: update_media_object_media_attachments
 */
export async function update({ pathParams, params }: Options) {
  return await client().fetchAs<void>(`/v1/media_attachments/{attachment_id}`, {
    method: 'PUT',
    pathParams,
    params
  });
}
