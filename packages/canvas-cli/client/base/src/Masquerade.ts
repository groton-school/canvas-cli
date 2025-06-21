export type Masquerade = {
  /**
   * Masquerading is making an API call on behalf of another user. It will
   * behave as if the target user had made the API call with their own access
   * token (even if they don't have one), including permission checks,
   * enrollments, etc. In order to masquerade via the API, the calling user must
   * have the "Become other users" permission. If the target user is also an
   * admin, the calling user must additionally have every permission that the
   * target user has. For auditing purposes, all calls log both the calling user
   * and the target user.
   *
   * To masquerade, add an as_user_id parameter to any request. It can be either
   * a Canvas user ID, or an SIS user ID
   */
  as_user_id?: string | number;
};
