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
 * Nickname: list_media_objects_groups_media_objects
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/groups/{group_id}/media_objects`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
