import { plugin } from '../../../CanvasStudio.js';
import { User } from '../../../Resources/User.js';
import { friendlyError } from '../../friendlyError.js';

export type GetOptions = {
  path: {
    user_id: number;
  };
};

export type GetResponse = { user: User };

export async function get({
  path: { user_id }
}: GetOptions): Promise<GetResponse> {
  try {
    return await plugin.client.requestJSON<GetResponse>(
      `/api/public/v1/users/${user_id}`
    );
  } catch (error) {
    throw friendlyError(error, { 404: 'The user was not found' });
  }
}
