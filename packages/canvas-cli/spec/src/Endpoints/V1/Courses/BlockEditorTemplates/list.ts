import { BlockEditorTemplate } from '../../../../Resources/BlockEditorTemplate.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List block templates
 *
 * A list of the block templates available to the current user.
 *
 * Nickname: list_block_templates
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/courses/{course_id}/block_editor_templates`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
