import { Colors } from '@battis/qui-cli.colors';
import { Log } from '@battis/qui-cli.log';
import ora from 'ora';
import * as Assignments from './Assignments.js';
import { canvas, stringify } from './Client.js';
import * as Courses from './Courses.js';
import { isError } from './Error.js';

export type GradingRules = {
  /** Number of lowest scores to be dropped for each user. */
  drop_lowest: number;
  /** Number of highest scores to be dropped for each user. */
  drop_highest: number;
  /** Assignment IDs that should never be dropped. */
  never_drop: number[];
};

export type Model = {
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
  assignments: Assignments.Model[];
  /** the grading rules that this Assignment Group has */
  rules: GradingRules | null;
};

export type Parameters = {
  /** The assignment group’s name */
  name?: string;
  /** The position of this assignment group in relation to the other assignment groups */
  position?: number;
  /** The percent of the total grade that this assignment group represents */
  group_weight?: number;
  /** The sis source id of the Assignment Group */
  sis_source_id?: string;
  /** The integration data of the Assignment Group */
  integration_data?: object;
};

type CreateOptions = {
  course: Courses.Model;
  args: Parameters;
};

export async function create({ course, args }: CreateOptions) {
  const spinner = ora(
    `Creating assignment group ${Colors.value(args.name)}`
  ).start();
  const body = new URLSearchParams(stringify(args));
  const result = (await canvas().fetch(
    `/api/v1/courses/${course.id}/assignment_groups`,
    {
      method: 'POST',
      body
    }
  )) as Model;
  if (isError(result)) {
    spinner.fail(`Error creating assignment group ${Colors.value(args.name)}`);
    throw new Error(
      `Error creating assignment group: ${Log.syntaxColor({
        ...Courses.basic(course),
        args: stringify(args),
        error: result
      })}`
    );
  }
  spinner.succeed(`Created assignment group ${Colors.value(result.name)}`);
  return result;
}

type UpdateParameters = Parameters & {
  /** The grading rules that are applied within this assignment group See the Assignment Group object definition for format */
  rules?: string;
};

type UpdateOptions = {
  course: Courses.Model;
  assignmentGroup: Model;
  args: UpdateParameters;
};

export async function update({ course, assignmentGroup, args }: UpdateOptions) {
  const spinner = ora(
    `Updating assignment group ${Colors.value(assignmentGroup.name || assignmentGroup.id)}`
  ).start();
  const body = new URLSearchParams(stringify(args));
  const result = (await canvas().fetch(
    `/api/v1/courses/${course.id}/assignment_groups/${assignmentGroup.id}`,
    { method: 'PUT', body }
  )) as Model;
  if (isError(result)) {
    spinner.fail(
      `Error updating assignment group ${Colors.value(assignmentGroup.name || assignmentGroup.id)}`
    );
    throw new Error(
      `Error updating assignment group: ${Log.syntaxColor({ course, assignmentGroup, args: stringify(args), error: result })}`
    );
  }
  spinner.succeed(`Updated assignment group ${Colors.value(result.name)}`);
  return result;
}
