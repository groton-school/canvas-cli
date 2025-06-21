export type Paginated = {
  /**
   * Requests that return multiple items will be paginated to 10 items by
   * default. You can set a custom per-page amount with the ?per_page parameter.
   * There is an unspecified limit to how big you can set per_page to, so be
   * sure to always check for the Link header.
   *
   * @see https://developerdocs.instructure.com/services/canvas/basics/file.pagination
   */
  per_page?: number;
};
