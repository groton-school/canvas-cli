import { Colors } from '@battis/qui-cli.colors';
import { Log } from '@battis/qui-cli.log';
import { OAuth2 } from '@oauth2-cli/qui-cli-plugin';
import ora from 'ora';
import * as Debug from '../Debug.js';
import { Assignment } from './Assignment.js';
import { Course } from './Course.js';
import { isError } from './Error.js';
import * as Canvas from './URL.js';

export type GradingRules = {
  /** Number of lowest scores to be dropped for each user. */
  drop_lowest: number;
  /** Number of highest scores to be dropped for each user. */
  drop_highest: number;
  /** Assignment IDs that should never be dropped. */
  never_drop: number[];
};

export type AssignmentGroup = {
  /** the id of the Assignment Group */
  id: number;
  /** the name of the Assignment Group */
  name: string;
  /** the position of the Assignment Group */
  position: number;
  /** the weight of the Assignment Group */
  group_weight: number;
  /** the sis source id of the Assignment Group */
  sis_source_id: string;
  /** the integration data of the Assignment Group */
  integration_data: any;
  /** the assignments in this Assignment Group (see the Assignment API for a
   * detailed list of fields) */
  assignments: Assignment[];
  /** the grading rules that this Assignment Group has */
  rules: GradingRules | null;
};

export type AssignmentGroupData = {
  name?: string;
  position?: number;
  group_weight?: number;
  sis_source_id?: string;
  integration_data?: any;
};

type CreateOptions = {
  course: Course;
  data: AssignmentGroupData;
};

function stringify(obj: Record<string, any>) {
  const stringified: Record<string, string> = {};
  for (const key in obj) {
    stringified[key] = obj[key].toString();
  }
  return stringified;
}

export async function create({ course, data }: CreateOptions) {
  const spinner = ora(
    `Creating assignment group ${Colors.value(data.name)}`
  ).start();
  const body = new URLSearchParams(stringify(data));
  const result = (await OAuth2.requestJSON(
    Canvas.url(`/api/v1/courses/${course.id}/assignment_groups`),
    'POST',
    body
  )) as AssignmentGroup;
  if (isError(result)) {
    spinner.fail(`Error creating assignment group ${Colors.value(data.name)}`);
    throw new Error(
      `Error creating assignment group: ${Log.syntaxColor({
        ...Debug.course(course),
        assignmentGroup: data,
        error: result
      })}`
    );
  }
  spinner.succeed(`Created assignment group ${result.name}`);
  return result;
}
