import { plugin } from '../../../CanvasStudio.js';
import { Course } from '../../../Resources/Courses.js';
import { friendlyError } from '../../friendlyError.js';

export type GetOptions = {
  path: {
    course_id: number | string;
  };
};

export type GetResponse = { course: Course };

export async function get({
  path: { course_id }
}: GetOptions): Promise<GetResponse> {
  try {
    return await plugin.client.requestJSON<GetResponse>(
      `/api/public/v1/courses/${course_id}`
    );
  } catch (error) {
    throw friendlyError(error, {
      404: 'Course could not be found with provided id'
    });
  }
}
