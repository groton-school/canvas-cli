import { DateTimeString } from '@battis/descriptive-types';
import { Colors } from '@battis/qui-cli.colors';
import { Log } from '@battis/qui-cli.log';
import ora from 'ora';
import { canvas, stringify } from './Client.js';
import * as Enrollments from './Enrollments.js';
import { isError } from './Error.js';

export type Model = {
  /** The unique identifier for the enrollment term. */
  id: number;
  /** The SIS id of the term. Only included if the user has permission to view SIS */
  /** information. */
  sis_term_id: string;
  /** the unique identifier for the SIS import. This field is only included if the
   * user has permission to manage SIS information. */
  sis_import_id: number;
  /** The name of the term. */
  name: string;
  /** The datetime of the start of the term. */
  start_at: DateTimeString<'ISO'>;
  /** The datetime of the end of the term. */
  end_at: DateTimeString<'ISO'>;
  /** The state of the term. Can be 'active' or 'deleted'. */
  workflow_state: 'active' | 'deleted';
  /** Term date overrides for specific enrollment types */
  overrides: Record<
    Enrollments.Model['type'],
    {
      start_at: DateTimeString<'ISO'>;
      end_at: DateTimeString<'ISO'>;
    }
  >;
  /** The number of courses in the term (available via include) */
  course_count?: number;
};

export type EnrollmentTermsList = {
  /** a paginated list of all terms in the account */
  enrollment_terms: Model[];
};

type GetOptions = ({ id: number } | { sis_term_id: string }) & {
  account_id?: number;
};

export async function get(identifier: GetOptions) {
  const { account_id = 1 } = identifier;
  const result = (await canvas().fetch(
    `/api/v1/accounts/${account_id}/terms/${'id' in identifier ? identifier.id : `sis_term_id:${identifier.sis_term_id}`}`
  )) as Model;
  if (isError(result)) {
    Log.debug(
      `Error getting enrollment term: ${Log.syntaxColor({ identifier, error: result })}`
    );
    return undefined;
  }
  return result;
}

export type Parameters = {
  /** The name of the term. */
  'enrollment_term[name]'?: string;
  /** The day/time the term starts. Accepts times in ISO 8601 format, e.g. 2015-01-10T18:48:00Z. */
  'enrollment_term[start_at]'?: DateTimeString<'ISO'>;
  /** The day/time the term ends. Accepts times in ISO 8601 format, e.g. 2015-01-10T18:48:00Z. */
  'enrollment_term[end_at]'?: DateTimeString<'ISO'>;
  /** The unique SIS identifier for the term. */
  'enrollment_term[sis_term_id]'?: string;
  'enrollment_term[overrides]'?: Record<
    Enrollments.Model['type'],
    {
      /** The day/time the term starts, overridden for the given enrollment type. enrollment_type can be one of StudentEnrollment, TeacherEnrollment, TaEnrollment, or DesignerEnrollment */
      start_at?: DateTimeString<'ISO'>;
      /** The day/time the term ends, overridden for the given enrollment type. enrollment_type can be one of StudentEnrollment, TeacherEnrollment, TaEnrollment, or DesignerEnrollment */
      end_at?: DateTimeString<'ISO'>;
    }
  >;
};

type CreateOptions = {
  account_id?: number;
  args: Parameters;
};

export async function create({ account_id = 1, args }: CreateOptions) {
  const spinner = ora(
    `Creating term ${Colors.value(args['enrollment_term[name]'])}`
  ).start();
  const result = (await canvas().fetch(`/api/v1/accounts/${account_id}/terms`, {
    method: 'POST',
    body: new URLSearchParams(stringify(args))
  })) as Model;
  if (isError(result)) {
    spinner.fail(
      `Error creating term ${Colors.value(args['enrollment_term[name]'])}`
    );
    throw new Error(
      `Error creating term: ${Log.syntaxColor({ account_id, args: stringify(args), error: result })}`
    );
  }
  spinner.succeed(`Created term ${result.name}`);
  return result;
}
