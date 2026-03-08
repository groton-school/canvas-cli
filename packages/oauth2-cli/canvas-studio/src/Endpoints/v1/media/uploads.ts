import { Colors } from '@qui-cli/colors';
import * as requestish from 'requestish';
import { plugin } from '../../../CanvasStudio.js';
import { Media } from '../../../Resources/Media.js';
import { Upload } from '../../../Resources/MediaUpload.js';
import { friendlyError } from '../../friendlyError.js';

export type UploadsOptions = { body: { user_id: number | string } };

export async function uploads({ body }: UploadsOptions): Promise<Upload> {
  try {
    return await plugin.requestJSON<Upload>(
      '/api/public/v1/media/uploads',
      'POST',
      await requestish.Body.from(body)
    );
  } catch (error) {
    throw friendlyError(error, {
      404: 'User was not found by id',
      422: `Invalid ${Colors.varName('user_id')} was provided`
    });
  }
}

export type CompleteOptions = {
  path: {
    media_id: number;
  };
  body: {
    title: string;
    description?: string;
    auto_caption?: boolean;
  };
};

export type CompleteResponse = { media: Media };

export async function complete({
  path: { media_id },
  body
}: CompleteOptions): Promise<CompleteResponse> {
  try {
    return await plugin.client.requestJSON<CompleteResponse>(
      `/api/public/v1/media/uploads/${media_id}/complete`,
      'POST',
      await requestish.Body.from(body)
    );
  } catch (error) {
    throw friendlyError(error, {
      400: `The ${Colors.varName('title')} is missing`,
      404: 'The media was not found by ID',
      409: 'This upload has already been completed',
      501: 'Auto-captioning was requested but is not enabled fo the account'
    });
  }
}
