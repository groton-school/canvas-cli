import { client } from '../../../../Client.js';
import { Course } from '../../../../Resources/Courses.js';

export type listPathParameters = {
  /** ID */
  account_id: string;
};

export type listSearchParameters = {
  /**
   * If true, include only courses with at least one enrollment. If false,
   * include only courses with no enrollments. If not present, do not filter
   * on course enrollment status.
   */
  with_enrollments: boolean;
  /**
   * If set, only return courses that have at least one user enrolled in in
   * the course with one of the specified enrollment types.
   */
  enrollment_type: string[];
  /**
   * If true, include only published courses. If false, exclude published
   * courses. If not present, do not filter on published status.
   */
  published: boolean;
  /**
   * If true, include only completed courses (these may be in state
   * 'completed', or their enrollment term may have ended). If false, exclude
   * completed courses. If not present, do not filter on completed status.
   */
  completed: boolean;
  /**
   * If true, include only blueprint courses. If false, exclude them. If not
   * present, do not filter on this basis.
   */
  blueprint: boolean;
  /**
   * If true, include only courses that inherit content from a blueprint
   * course. If false, exclude them. If not present, do not filter on this
   * basis.
   */
  blueprint_associated: boolean;
  /**
   * If true, include only public courses. If false, exclude them. If not
   * present, do not filter on this basis.
   */
  public: boolean;
  /**
   * List of User IDs of teachers; if supplied, include only courses taught by
   * one of the referenced users.
   *
   * Format: 'int64'
   */
  by_teachers: string[];
  /**
   * List of Account IDs; if supplied, include only courses associated with
   * one of the referenced subaccounts.
   *
   * Format: 'int64'
   */
  by_subaccounts: string[];
  /**
   * If present, only return courses that have at least one enrollment.
   * Equivalent to 'with_enrollments=true'; retained for compatibility.
   */
  hide_enrollmentless_courses: boolean;
  /**
   * If set, only return courses that are in the given state(s). By default,
   * all states but "deleted" are returned.
   */
  state: string[];
  /**
   * If set, only includes courses from the specified term.
   *
   * Format: 'int64'
   */
  enrollment_term_id: number;
  /**
   * The partial course name, code, or full ID to match and return in the
   * results list. Must be at least 3 characters.
   */
  search_term: string;
  /**
   * - All explanations can be seen in the {api:CoursesController#index Course
   *   API index documentation}
   * - "sections", "needs_grading_count" and "total_scores" are not valid
   *   options at the account level
   */
  include: string[];
  /** The column to sort results by. */
  sort: string;
  /** The order to sort the given column by. */
  order: string;
  /**
   * The filter to search by. "course" searches for course names, course
   * codes, and SIS IDs. "teacher" searches for teacher names
   */
  search_by: string;
  /**
   * If set, only return courses that start before the value (inclusive) or
   * their enrollment term starts before the value (inclusive) or both the
   * course's start_at and the enrollment term's start_at are set to null. The
   * value should be formatted as: yyyy-mm-dd or ISO 8601
   * YYYY-MM-DDTHH:MM:SSZ.
   *
   * Format: date
   */
  starts_before: string;
  /**
   * If set, only return courses that end after the value (inclusive) or their
   * enrollment term ends after the value (inclusive) or both the course's
   * end_at and the enrollment term's end_at are set to null. The value should
   * be formatted as: yyyy-mm-dd or ISO 8601 YYYY-MM-DDTHH:MM:SSZ.
   *
   * Format: date
   */
  ends_after: string;
  /** If set, only return homeroom courses. */
  homeroom: boolean;
};

type Options = {
  pathParams: listPathParameters;
  searchParams?: listSearchParameters;
};

/**
 * List active courses in an account
 *
 * Retrieve a paginated list of courses in this account.
 *
 * Nickname: list_active_courses_in_account
 */
export async function list({ pathParams, searchParams }: Options) {
  return await client().fetchAs<string[]>(`/v1/accounts/{account_id}/courses`, {
    method: 'GET',
    pathParams,
    searchParams
  });
}
