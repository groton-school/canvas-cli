import * as Canvas from './Canvas.js';

export function course(course: Canvas.Courses.Model) {
  return {
    course: { name: course.name, url: Canvas.url(`/courses/${course.id}`) }
  };
}

export function URLSearchParams(search: URLSearchParams) {
  const data: Record<string, string> = {};
  for (const [key, value] of search.entries()) {
    data[key] = value;
  }
  return data;
}
