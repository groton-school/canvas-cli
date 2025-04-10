import { client } from '../../../../Client.js';

export type add_recipientsPathParameters = {
  /** ID */
  id: string;
};

export type add_recipientsFormParameters = {
  /**
   * An array of recipient ids. These may be user ids or course/group ids
   * prefixed with "course_" or "group_" respectively, e.g.
   * recipients[]=1&recipients[]=2&recipients[]=course_3
   */
  recipients: string[];
};

type Options = {
  pathParams: add_recipientsPathParameters;
} & (
  | {
      params?: Partial<add_recipientsFormParameters>;
      strict?: false;
    }
  | {
      params?: add_recipientsFormParameters;
      strict: true;
    }
);

/**
 * Add recipients
 *
 * Add recipients to an existing group conversation. Response is similar to the
 * GET/show action, except that only includes the latest message (e.g. "joe was
 * added to the conversation by bob")
 *
 * Nickname: add_recipients
 */
export async function add_recipients({ pathParams, params }: Options) {
  return await client().fetchAs<void>(`/v1/conversations/{id}/add_recipients`, {
    method: 'POST',
    pathParams,
    params
  });
}
