import { client } from '../../../Client.js';

export type updatePathParameters = {
  /** ID */
  attachment_id: string;
};

export type updateFormParameters = {
  /** The new title. */
  user_entered_title: string;
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
 * Update Media Object
 *
 * Nickname: update_media_object_media_attachments
 */
export async function update(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/media_attachments/{attachment_id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
