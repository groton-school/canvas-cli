import { URLString } from '@battis/descriptive-types';
import { Colors } from '@qui-cli/colors';
import * as requestish from 'requestish';
import { plugin } from '../../../CanvasStudio.js';
import { friendlyError } from '../../friendlyError.js';

export type CreateEmbedOptions = {
  path: {
    media_id: number;
  };
  body: {
    course_id: number | string;
    embed_type?: 'embed' | 'bare_embed';
    downloadable?: boolean;
  };
};

export type CreateEmbedResponse = {
  embed_url: URLString;
};

export async function create_embed({
  path: { media_id },
  body
}: CreateEmbedOptions): Promise<CreateEmbedResponse> {
  try {
    return await plugin.client.requestJSON<CreateEmbedResponse>(
      `/api/public/v1/media/${media_id}/create_embed`,
      'POST',
      await requestish.Body.from(body)
    );
  } catch (error) {
    throw friendlyError(error, {
      404: 'The media was not found by ID',
      422: `Invalid ${Colors.varName('media_id')} is provided`
    });
  }
}
