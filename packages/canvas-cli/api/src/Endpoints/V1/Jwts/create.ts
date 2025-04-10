import { client } from '../../../Client.js';
import { JWT } from '../../../Resources/JwTs.js';

export type createFormParameters = {
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
   * Format: 'int64'
   */
  context_id: number;
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
   */
  canvas_audience: boolean;
};

type Options =
  | {
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      params?: createFormParameters;
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
export async function create({ params }: Options) {
  return await client().fetchAs<JWT>(`/v1/jwts`, {
    method: 'POST',
    params
  });
}
