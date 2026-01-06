import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../Client.js';
import { NoticeHandler } from '../../../Resources/NoticeHandlers.js';

export type set_notice_handlerPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  context_external_tool_id: string | number;
};

export type set_notice_handlerSearchParameters = Masquerade;

export type set_notice_handlerFormParameters = Masquerade & {
  /** The type of notice */
  notice_type: string;
  /** URL to receive the notice, or an empty string to unsubscribe */
  handler: string;
  /**
   * The maximum number of notices to include in a single batch
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  max_batch_size: number | string;
};

type Options = {
  pathParams: set_notice_handlerPathParameters;
} & (
  | {
      searchParams?: Partial<set_notice_handlerSearchParameters>;
      params?: Partial<set_notice_handlerFormParameters>;
      strict?: false;
    }
  | {
      searchParams: set_notice_handlerSearchParameters;
      params: set_notice_handlerFormParameters;
      strict: true;
    }
);

/**
 * Set notice handler
 *
 * Subscribe (set) or unsubscribe (remove) a notice handler for the tool
 *
 * Nickname: set_notice_handler
 */
export async function set_notice_handler(options: Options) {
  const response = await client().fetchAs<NoticeHandler>(
    `/api/lti/notice-handlers/{context_external_tool_id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
