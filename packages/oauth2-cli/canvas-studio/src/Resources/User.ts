import { EmailString } from '@battis/descriptive-types';

export type User = {
  id: number;
  full_name: string;
  display_name: string;
  email: EmailString;
  role_names?: (
    | 'Admin'
    | 'Teacher'
    | 'Student'
    | 'Observer'
    | 'Subaccount admin'
  )[];
};
