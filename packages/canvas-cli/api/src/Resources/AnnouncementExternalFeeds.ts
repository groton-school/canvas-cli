export type ExternalFeed = {
  /**
   * The ID of the feed
   *
   * Type: integer
   */
  id: number | string;
  /**
   * The title of the feed, pulled from the feed itself. If the feed hasn't yet
   * been pulled, a temporary name will be synthesized based on the URL
   */
  display_name: string;
  /** The HTTP/HTTPS URL to the feed */
  url: string;
  /**
   * If not null, only feed entries whose title contains this string will
   * trigger new posts in Canvas
   */
  header_match: string;
  /**
   * When this external feed was added to Canvas
   *
   * Format: date-time
   */
  created_at: string;
  /**
   * The verbosity setting determines how much of the feed's content is imported
   * into Canvas as part of the posting. 'link_only' means that only the title
   * and a link to the item. 'truncate' means that a summary of the first
   * portion of the item body will be used. 'full' means that the full item body
   * will be used.
   */
  verbosity: string;
};
