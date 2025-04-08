import { client } from '../../../Client.js';
import { Course } from '../../../Resources/Courses.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List your courses
 *
 * Returns the paginated list of active courses for the current user.
 *
 * Nickname: list_your_courses
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(`/v1/courses`, {
    method: 'GET',
    params: parameters
  });
}
