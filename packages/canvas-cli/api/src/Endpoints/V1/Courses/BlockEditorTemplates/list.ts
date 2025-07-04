import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { BlockEditorTemplate } from '../../../../Resources/BlockEditorTemplate.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /** Sort results by this field. */
    sort: string;
    /** The sorting order. Defaults to 'asc'. */
    order: string;
    /**
     * If true, include draft templates. If false or omitted only published
     * templates will be returned.
     *
     * Type: boolean
     */
    drafts: boolean | string;
    /** What type of templates should be returned. */
    type: string[];
    /** No description */
    include: string[];
  }>;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
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
export async function list(options: Options) {
  const response = await client().fetchAs<BlockEditorTemplate[]>(
    `/api/v1/courses/{course_id}/block_editor_templates`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
