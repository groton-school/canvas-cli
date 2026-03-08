import { EmailString } from '@battis/descriptive-types';
import * as requestish from 'requestish';
import { plugin } from '../../../CanvasStudio.js';
import { User } from '../../../Resources/User.js';
import { friendlyError } from '../../friendlyError.js';

export type SearchOptions = {
  query: {
    role?: 'Admin' | 'Teacher' | 'Student' | 'Observer';
    email?: EmailString;
    page?: number;
    per_page?: number;
  };
};

export type SearchResponse = {
  users: User[];
  meta: {
    current_page: number;
    last_page: number;
    total_count: number;
  };
};

export async function search({
  query
}: SearchOptions): Promise<SearchResponse> {
  try {
    return await plugin.client.requestJSON<SearchResponse>(
      `/api/public/v1/users/search${requestish.URLSearchParams.toString(query)}`
    );
  } catch (error) {
    throw friendlyError(error);
  }
}
