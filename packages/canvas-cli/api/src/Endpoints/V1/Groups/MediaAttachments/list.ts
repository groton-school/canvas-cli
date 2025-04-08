import { client } from '../../../../Client.js';
import { MediaObject } from '../../../../Resources/MediaObjects.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List Media Objects
 *
 * Returns media objects created by the user making the request. When using the
 * second version, returns media objects associated with the given course.
 *
 * Nickname: list_media_objects_groups_media_attachments
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/groups/{group_id}/media_attachments`,
    { method: 'GET', params: parameters }
  );
}
