import { HTMLString } from '@battis/descriptive-types';
import { Colors } from '@battis/qui-cli.colors';
import { Log } from '@battis/qui-cli.log';
import ora from 'ora';
import { canvas, stringify } from './Client.js';
import * as Courses from './Courses.js';
import { isError } from './Error.js';

export type Model = {
  /** the ID of the rubric */
  id: number;
  /** title of the rubric */
  title: string;
  /** the context owning the rubric */
  context_id: number;
  context_type: string;
  points_possible: number;
  reusable: boolean;
  read_only: boolean;
  /** whether or not free-form comments are used */
  free_form_criterion_comments: boolean;
  hide_score_total: boolean;
  /** An array with all of this Rubric's grading Criteria */
  data?: RubricCriterion[];
  /** If an assessment type is included in the 'include' parameter, includes an
   * array of rubric assessment objects for a given rubric, based on the
   * assessment type requested. If the user does not request an assessment type
   * this key will be absent. */
  assessments?: any;
  /** If an association type is included in the 'include' parameter, includes an
   * array of rubric association objects for a given rubric, based on the
   * association type requested. If the user does not request an association type
   * this key will be absent. */
  associations?: any;
};

export type RubricCriterion = {
  /** the ID of the criterion */
  id: string;
  description: HTMLString;
  long_description: HTMLString;
  points: number;
  criterion_use_range: boolean;
  /** the possible ratings for this Criterion */
  ratings: RubricRating[];
};

export type RubricRating = {
  id: string;
  criterion_id: string;
  description: HTMLString;
  long_description: HTMLString;
  points: number;
};

export type RubricAssessment = {
  /** the ID of the rubric */
  id: number;
  /** the rubric the assessment belongs to */
  rubric_id: number;
  rubric_association_id: number;
  score: number;
  /** the object of the assessment */
  artifact_type: string;
  /** the id of the object of the assessment */
  artifact_id: number;
  /** the current number of attempts made on the object of the assessment */
  artifact_attempt: number;
  /** the type of assessment. values will be either 'grading', 'peer_review', or
   * 'provisional_grade' */
  assessment_type: 'grading' | 'peer_review' | 'provisional_grade';
  /** user id of the person who made the assessment */
  assessor_id: number;
  /** (Optional) If 'full' is included in the 'style' parameter, returned
   * assessments will have their full details contained in their data hash. If the
   * user does not request a style, this key will be absent. */
  data?: RubricCriterion[];
  /** (Optional) If 'comments_only' is included in the 'style' parameter, returned
   * assessments will include only the comments portion of their data hash. If the
   * user does not request a style, this key will be absent. */
  comments?: HTMLString;
};

export type RubricAssociation = {
  /** the ID of the association */
  id: number;
  /** the ID of the rubric */
  rubric_id: number;
  /** the ID of the object this association links to */
  association_id: number;
  /** the type of object this association links to */
  association_type: 'Assignment' | 'Course' | 'Account';
  /** Whether or not the associated rubric is used for grade calculation */
  use_for_grading: boolean;
  summary_data: any;
  /** Whether or not the association is for grading (and thus linked to an
   * assignment) or if it's to indicate the rubric should appear in its context.
   * Values will be grading or bookmark. */
  purpose: 'grading' | 'bookmark';
  /** Whether or not the score total is displayed within the rubric. This option is
   * only available if the rubric is not used for grading. */
  hide_score_total: boolean;
  hide_points: boolean;
  hide_outcome_results: boolean;
};

export type CreateRubricRatingParameters = Omit<
  RubricRating,
  'id' | 'criterion_id'
>;

export type CreateRubricCriterionParameters = Omit<
  RubricCriterion,
  'id' | 'ratings'
> & { ratings: CreateRubricRatingParameters[] };

export type CreateParameters = {
  /** The id of the rubric */
  id?: number;
  /** The id of the rubric association object (not the course/assignment itself, but the join table record id). It can be used in place of rubric_association and rubric_association if desired. */
  rubric_association_id?: number;
  /** The title of the rubric */
  'rubric[title]'?: string;
  'rubric[hide_points]'?: boolean;
  /** Whether or not you can write custom comments in the ratings field for a rubric */
  'rubric[free_form_criterion_comments]'?: boolean;
  /** An indexed Hash of RubricCriteria objects where the keys are integer ids and the values are the RubricCriteria objects */
  'rubric[criteria]'?: CreateRubricCriterionParameters[];
} & Omit<CreateRubricAssociationParameters, 'rubric_association[rubric_id]'>;

type CreateOptions = {
  course: Courses.Model;
  args: CreateParameters;
};

export async function create({ course, args }: CreateOptions) {
  const spinner = ora(
    `Creating rubric ${Colors.value(args['rubric[title]'])}`
  ).start();
  const result = (await canvas().fetch(`/api/v1/courses/${course.id}/rubrics`, {
    method: 'POST',
    body: new URLSearchParams(stringify(args))
  })) as { rubric: Model; rubric_association: RubricAssociation };
  if (isError(result)) {
    spinner.fail(
      `Error creating rubric ${Colors.value(args['rubric[title]'])}`
    );
    throw new Error(
      `Error creating rubric: ${Log.syntaxColor({ ...Courses.basic(course), args: stringify(args), error: result })}`
    );
  }
  spinner.succeed(`Created rubric ${Colors.value(result.rubric.title)}`);
  return result;
}

export type CreateRubricAssociationParameters = {
  /** The id of the Rubric */
  'rubric_association[rubric_id]': number;
  /** The id of the object with which this rubric is associated */
  'rubric_association[association_id]': number;
  /** The type of object this rubric is associated with

    Allowed values:
    Assignment, Course, Account */
  'rubric_association[association_type]': 'Assignment' | 'Course' | 'Account';
  /** The name of the object this rubric is associated with */
  'rubric_association[title]'?: string;
  /** Whether or not the associated rubric is used for grade calculation */
  'rubric_association[use_for_grading]': boolean;
  /** Whether or not the score total is displayed within the rubric. This option is only available if the rubric is not used for grading. */
  'rubric_association[hide_score_total]': boolean;
  'rubric_association[hide_points]': boolean;
  'rubric_association[hide_outcome_results]': boolean;
  /** Whether or not the association is for grading (and thus linked to an assignment) or if it’s to indicate the rubric should appear in its context

    Allowed values:
    grading, bookmark */
  'rubric_association[purpose]': 'grading' | 'bookmark';
  /** Whether or not the associated rubric appears in its context */
  'rubric_association[bookmarked]'?: boolean;
};

type CreateRubricAssociationOptions = {
  course_id: number;
  args: CreateRubricAssociationParameters;
};

export async function createAssociation({
  course_id,
  args
}: CreateRubricAssociationOptions) {
  const spinner = ora(
    `Associating rubric ${Colors.value(args['rubric_association[rubric_id]'])} with ${args['rubric_association[association_type]']} ${Colors.value(args['rubric_association[association_id]'])}`
  ).start();
  const result = (await canvas().fetch(
    `/api/v1/courses/${course_id}/rubric_associations`,
    { method: 'POST', body: new URLSearchParams(stringify(args)) }
  )) as RubricAssociation;
  if (isError(result)) {
    spinner.fail(
      `Error creating rubric ${Colors.value(args['rubric_association[rubric_id]'])} association with ${args['rubric_association[association_type]']} ${Colors.value(args['rubric_association[association_id]'])}`
    );
    throw new Error(
      `Error creating rubric association: ${Log.syntaxColor({ course_id, args: stringify(args), error: result })}`
    );
  }
  spinner.succeed(
    `Associated rubric ${Colors.value(result.rubric_id)} with ${result.association_type} ${Colors.value(result.association_id)}`
  );
  return result;
}
