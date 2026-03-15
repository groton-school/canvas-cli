import { plugin } from '../../../../CanvasStudio.js';
import { User } from '../../../../Resources/User.js';
import { friendlyError } from '../../../friendlyError.js';

export type CreateOptions = {
  path: {
    media_id: number;
  };
  body: {
    permissions: {
      action: 'create';
      id: number;
      share_type: 'user' | 'group';
      permission_type: 'view' | 'edit';
    }[];
  };
};

export type CreateResponse = {
  users: (User & { permission: 'view' | 'edit' | 'owner' })[];
  groups: { id: number; name: string; permission: 'view' | 'edit' }[];
};

export async function create({ path: { media_id }, body }: CreateOptions) {
  try {
    return await plugin.client.requestJSON<CreateResponse>(
      `/api/public/v1/media/${media_id}/permissions`,
      'POST',
      JSON.stringify(body),
      { 'content-type': 'application/json' }
    );
  } catch (error) {
    throw friendlyError(error, {
      404: 'The media was not found by ID',
      422: 'Invalid media ID is provided'
    });
  }
}
