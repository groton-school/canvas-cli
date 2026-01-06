import { JSONValue } from '@battis/typescript-tricks';

/** Set of notice handlers (one per notice type) for an LTI tool deployment. */
export type NoticeCatalog = {
  /** The LTI tool's client ID (global developer key ID) */
  client_id: string;
  /** String that identifies the Platform-Tool integration governing the notices */
  deployment_id: string;
  /** List of notice handlers for the tool */
  notice_handlers: NoticeHandler[];
};

/** A notice handler for a particular tool deployment and notice type. */
export type NoticeHandler = {
  /** URL to receive the notice */
  handler: string;
  /** The type of notice */
  notice_type: string;
  /**
   * The maximum number of notices to include in a single batch, or 'null' if
   * not set.
   *
   * Type: integer
   */
  max_batch_size: number | string;
};
