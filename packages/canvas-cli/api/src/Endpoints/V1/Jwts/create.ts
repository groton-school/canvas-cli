import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../Client.js';
import { JWT } from '../../../Resources/JwTs.js';

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /**
   * Adds additional data to the JWT to be used by the consuming service
   * workflow
   */
  workflows: string[];
  /**
   * The type of the context to generate the JWT for, in case the workflow
   * requires it. Case insensitive.
   */
  context_type: string;
  /**
   * The id of the context to generate the JWT for, in case the workflow
   * requires it.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  context_id: number | string;
  /**
   * The uuid of the context to generate the JWT for, in case the workflow
   * requires it. Note that context_id and context_uuid are mutually
   * exclusive. If both are provided, an error will be returned.
   */
  context_uuid: string;
  /**
   * Defaults to true. If false, the JWT will be signed, but not encrypted,
   * for use in downstream services. The default encrypted behaviour can be
   * used to talk to Canvas itself.
   *
   * Type: boolean
   */
  canvas_audience: boolean | string;
};

type Options =
  | {
      searchParams?: Partial<createSearchParameters>;
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      searchParams: createSearchParameters;
      params: createFormParameters;
      strict: true;
    };

/**
 * Create JWT
 *
 * Create a unique JWT for use with other Canvas services
 *
 * Generates a different JWT each time it's called. Each JWT expires after a
 * short window (1 hour)
 *
 * Nickname: create_jwt
 */
export async function create(options: Options) {
  const response = await client().fetchAs<JWT>(`/api/v1/jwts`, {
    method: 'POST',
    ...options
  });
  return response;
}
