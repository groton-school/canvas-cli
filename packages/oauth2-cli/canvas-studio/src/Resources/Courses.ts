import { DateTimeString } from '@battis/descriptive-types';
import { User } from './User.js';

export type Course = {
  id: number;
  name: string;
  type: string;
  permission: string;
  owner: User;
  created_at: DateTimeString<'ISO'>;
  course_id: number;
  archived_at?: DateTimeString<'ISO'>;
};
