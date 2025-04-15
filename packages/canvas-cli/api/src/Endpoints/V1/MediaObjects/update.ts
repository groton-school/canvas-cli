import { client } from '../../../Client.js';

export type updatePathParameters = {
  /** ID */
  media_object_id: string;
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
 * Nickname: update_media_object_media_objects
 */
export async function update(options: Options) {
  return await client().fetchAs<void>(
    `/api/v1/media_objects/{media_object_id}`,
    {
      method: 'PUT',
      ...options
    }
  );
}
