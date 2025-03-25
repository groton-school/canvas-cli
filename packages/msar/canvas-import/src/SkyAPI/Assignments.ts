import { DateTimeString } from '@battis/descriptive-types';
import { sky } from './Client.js';

export type Model = {
  id: number;
  date: DateTimeString;
  description: string;
  discussion: false;
  due_date: DateTimeString;
  enrolled: number;
  graded_count: number;
  index_id: number;
  major: boolean;
  name: string;
  publish_on_assigned: boolean;
  published: boolean;
  rank: number;
  status: number;
  type: string;
  type_id: number;
};

type ListResponse = {
  count: number;
  value: Model[];
};

export async function listBySection(section_id: string | number) {
  const response = (await sky().fetch(
    `/school/v1/academics/sections/${section_id}/assignments`
  )) as ListResponse;
  return response.value;
}
