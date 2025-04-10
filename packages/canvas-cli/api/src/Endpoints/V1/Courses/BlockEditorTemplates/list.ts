import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { BlockEditorTemplate } from '../../../../Resources/BlockEditorTemplate.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
};

export type listSearchParameters = {
  /** Sort results by this field. */
  sort: string;
  /** The sorting order. Defaults to 'asc'. */
  order: string;
  /**
   * If true, include draft templates. If false or omitted only published
   * templates will be returned.
   */
  drafts: boolean;
  /** What type of templates should be returned. */
  type: string[];
  /** No description */
  include: string[];
} & Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams?: listSearchParameters;
      strict: true;
    }
);

/**
 * List block templates
 *
 * A list of the block templates available to the current user.
 *
 * Nickname: list_block_templates
 */
export async function list({ pathParams, searchParams }: Options) {
  return await client().fetchAs<BlockEditorTemplate[]>(
    `/v1/courses/{course_id}/block_editor_templates`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
