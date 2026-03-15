import * as requestish from 'requestish';
import { plugin } from '../../../../CanvasStudio.js';
import { Media } from '../../../../Resources/Media.js';
import { friendlyError } from '../../../friendlyError.js';

export type ListOptions = {
  path: {
    user_id: number;
  };
  query?: {
    page?: number;
    per_page?: number;
  };
};

export type ListResponse = {
  media: Media[];
  meta: {
    current_page: number;
    last_page: number;
    total_count: number;
  };
};

export async function list({ path: { user_id }, query }: ListOptions) {
  try {
    return await plugin.client.requestJSON<ListResponse>(
      `/api/public/v1/users/${user_id}/media${requestish.URLSearchParams.toString(query)}`
    );
  } catch (error) {
    throw friendlyError(error);
  }
}
