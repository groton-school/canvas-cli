import { CourseProgress } from '../../../../../Resources/Courses.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get user progress
 *
 * Return progress information for the user and course
 *
 * You can supply +self+ as the user_id to query your own progress in a course.
 * To query another user's progress, you must be a teacher in the course, an
 * administrator, or a linked observer of the user.
 *
 * Nickname: get_user_progress
 */
export async function get({ parameters }: Options): Promise<CourseProgress> {
  return await (
    await fetch(`/v1/courses/{course_id}/users/{user_id}/progress`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
