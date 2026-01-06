import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../Client.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  attachment_id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /** The new title. */
  user_entered_title: string;
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
 * Update Media Object
 *
 * Updates the title of a media object.
 *
 * Nickname: update_media_object_media_attachments
 */
export async function update(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/media_attachments/{attachment_id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
