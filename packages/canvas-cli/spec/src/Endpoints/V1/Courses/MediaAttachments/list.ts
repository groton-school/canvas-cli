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
 * Nickname: list_media_objects_courses_media_attachments
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/courses/{course_id}/media_attachments`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
