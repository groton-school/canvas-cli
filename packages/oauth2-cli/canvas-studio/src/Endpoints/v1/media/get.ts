import { plugin } from '../../../CanvasStudio.js';
import { Media } from '../../../Resources/Media.js';
import { friendlyError } from '../../friendlyError.js';

export type GetOptions = {
  path: {
    media_id: number | string;
  };
};

export type GetResponse = { media: Media };

export async function get({ path: { media_id } }: GetOptions) {
  try {
    return await plugin.client.requestJSON<GetResponse>(
      `/api/public/v1/media/${media_id}`
    );
  } catch (error) {
    throw friendlyError(error, { 404: 'The media ID was not found' });
  }
}
