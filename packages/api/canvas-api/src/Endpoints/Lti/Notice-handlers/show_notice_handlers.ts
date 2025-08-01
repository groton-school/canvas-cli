import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../Client.js';
import { NoticeCatalog } from '../../../Resources/NoticeHandlers.js';

export type show_notice_handlersPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  context_external_tool_id: string | number;
};

export type show_notice_handlersSearchParameters = Masquerade;

type Options = {
  pathParams: show_notice_handlersPathParameters;
} & (
  | {
      searchParams?: Partial<show_notice_handlersSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: show_notice_handlersSearchParameters;
      strict: true;
    }
);

/**
 * Show notice handlers
 *
 * List all notice handlers for the tool
 *
 * Nickname: show_notice_handlers
 */
export async function show_notice_handlers(options: Options) {
  const response = await client().fetchAs<NoticeCatalog>(
    `/api/lti/notice-handlers/{context_external_tool_id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
