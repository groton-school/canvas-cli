import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type preview_processed_htmlPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  group_id: string | number;
};

export type preview_processed_htmlSearchParameters = Masquerade;

export type preview_processed_htmlFormParameters = Masquerade & {
  /** The html content to process */
  html: string;
};

type Options = (
  | {
      path: preview_processed_htmlPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: preview_processed_htmlPathParameters;
    }
) &
  (
    | {
        query?: Partial<preview_processed_htmlSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<preview_processed_htmlSearchParameters>;
        body?: Partial<preview_processed_htmlFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<preview_processed_htmlFormParameters>;
        strict?: false;
      }
    | {
        query?: Partial<preview_processed_htmlSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: preview_processed_htmlSearchParameters;
        body?: Partial<preview_processed_htmlFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params: preview_processed_htmlFormParameters;
        strict: true;
      }
  );

/**
 * Preview processed html
 *
 * Preview html content processed for this group
 *
 * Nickname: preview_processed_html
 */
export async function preview_processed_html(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/groups/{group_id}/preview_html`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
