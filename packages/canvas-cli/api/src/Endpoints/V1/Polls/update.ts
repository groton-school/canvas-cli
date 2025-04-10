import { client } from '../../../Client.js';

export type updatePathParameters = {
  /** ID */
  id: string;
};

export type updateFormParameters = {
  /** The title of the poll. */
  'polls[question]': string[];
  /** A brief description or instructions for the poll. */
  'polls[description]': string[];
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      params?: updateFormParameters;
      strict: true;
    }
);

/**
 * Update a single poll
 *
 * Update an existing poll belonging to the current user
 *
 * Nickname: update_single_poll
 */
export async function update({ pathParams, params }: Options) {
  return await client().fetchAs<void>(`/v1/polls/{id}`, {
    method: 'PUT',
    pathParams,
    params
  });
}
